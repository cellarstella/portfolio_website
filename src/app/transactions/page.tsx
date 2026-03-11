'use client'

import React, { useState } from 'react';
import data from "../object/transactions.json";

interface Customer {
    customer_id: string;
    first_name: string;
    last_name: string;
    email: string;
    orders: Order[];
}

interface Order {
    order_id: string;
    date: string;
    status: string;
    total_amount: number;
    items: OrderItem[];
}

interface OrderItem {
    item_id: string;
    name: string;
    quantity: number;
    price: number;
}

export default function Transactions() {
    const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);
    const [selectedItems, setSelectedItems] = useState<OrderItem[] | null[]>([]);

    const getOrderDetails = (customer: Customer) => {
        // If customer has orders, select the first one
        if (customer.orders && customer.orders.length > 0) {
            setSelectedOrder(customer.orders[0]);
            setSelectedItems(customer.orders[0].items);
        } else {
            setSelectedOrder(null);
            setSelectedItems([])
        }
    };

    const getCustomerButtons = () => {
        const buttons: React.JSX.Element[] = [];
        for (const customer of data.customers) {
            buttons.push(
                <button 
                    key={customer.customer_id}
                    type="button"
                    className="py-2.5 px-5 text-sm text-gray-900 bg-white rounded-lg border border-gray-200 hover:text-blue-700 focus:ring-gray-100"
                    onClick={() => getOrderDetails(customer)}
                >
                    {customer.first_name} {customer.last_name}
                </button>
            );
        }
        return buttons;
    };

    return (
        <div>
            <header>
                {getCustomerButtons()}
            </header>
            <section>
                {selectedOrder ? (
                    <>
                        <p>Date: {selectedOrder.date}</p>
                        <p>Order ID: {selectedOrder.order_id}</p>
                        <p>Status: {selectedOrder.status}</p>
                        <p>Total Amount: ${selectedOrder.total_amount.toFixed(2)}</p>
                        { selectedItems ? selectedItems.map(item => (
                            <>
                                <p>{item?.name} ${item?.price.toFixed(2)} X {item?.quantity}</p>
                            </>
                        )): <></>}
                    </>
                ) : (
                    <p>Select a customer to view their order details</p>
                )}
            </section>
        </div>
    );
}