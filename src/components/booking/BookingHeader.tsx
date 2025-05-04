
import React from "react";

interface BookingHeaderProps {
  selectedService: {
    name: string;
    description: string;
    price: number;
  };
}

const BookingHeader = ({ selectedService }: BookingHeaderProps) => {
  return (
    <section className="bg-brand-dark text-white py-10">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto">
          <h1 className="heading-xl mb-2">Book {selectedService.name}</h1>
          <p className="text-lg text-gray-300 mb-4">
            {selectedService.description}
          </p>
          <div className="bg-brand-red/20 p-4 rounded-md inline-block">
            <span className="text-lg font-semibold">${selectedService.price}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingHeader;
