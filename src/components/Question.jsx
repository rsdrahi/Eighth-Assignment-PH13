import { ChevronDown, CreditCard, Receipt, ShoppingBag } from '@gravity-ui/icons';
import { Accordion, Card } from '@heroui/react';
import React from 'react';

const Question = () => {

  const items = [
    {
      content:
        "Browse books, select your favorite one, and place an order easily from the book details page.",
      icon: <ShoppingBag />,
      title: "How to Order a Book?",
    },
    {
      content:
        "Log in, choose a book, and click the borrow button to add it to your borrowed list.",
      icon: <Receipt />,
      title: "How to Borrow a Book?",
    },
    {
      content: "We accept all major credit cards, including Visa, Mastercard",
      icon: <CreditCard />,
      title: "Your Question about Payment Method?",
    },
  ];

  return (
    <Card className='border my-8 p-6'>
      <Accordion hideSeparator className="w-full max-w-md text-center">
        {items.map((item, index) => (
          <Accordion.Item key={index}>
            <Accordion.Heading>
              <Accordion.Trigger>
                {item.icon ? (
                  <span className="mr-3 size-4 shrink-0 text-muted">{item.icon}</span>
                ) : null}
                {item.title}
                <Accordion.Indicator>
                  <ChevronDown />
                </Accordion.Indicator>
              </Accordion.Trigger>
            </Accordion.Heading>
            <Accordion.Panel>
              <Accordion.Body>{item.content}</Accordion.Body>
            </Accordion.Panel>
          </Accordion.Item>
        ))}
      </Accordion>
    </Card>
  );
};

export default Question;