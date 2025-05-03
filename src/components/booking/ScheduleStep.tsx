
import React from "react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { format } from "date-fns";
import { Calendar as CalendarIcon, Clock } from "lucide-react";

interface ScheduleStepProps {
  selectedDate: Date | undefined;
  setSelectedDate: (date: Date | undefined) => void;
  selectedTime: string | null;
  setSelectedTime: (time: string) => void;
  timeSlots: string[];
}

const ScheduleStep = ({
  selectedDate,
  setSelectedDate,
  selectedTime,
  setSelectedTime,
  timeSlots,
}: ScheduleStepProps) => {
  const isDateDisabled = (date: Date) => {
    // Disable dates in the past
    return date < new Date(new Date().setHours(0, 0, 0, 0));
  };

  return (
    <div className="max-w-3xl mx-auto">
      <h3 className="text-lg font-semibold mb-4">Select Date & Time</h3>
      <div className="mb-6">
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline" className="w-full justify-start text-left font-normal">
              <CalendarIcon className="mr-2 h-4 w-4" />
              {selectedDate ? format(selectedDate, 'PP') : <span>Pick a date</span>}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0" align="start">
            <Calendar
              mode="single"
              selected={selectedDate}
              onSelect={setSelectedDate}
              disabled={isDateDisabled}
              initialFocus
            />
          </PopoverContent>
        </Popover>
      </div>

      {selectedDate && (
        <div>
          <h4 className="text-sm font-medium mb-3">Available Time Slots</h4>
          <div className="grid grid-cols-3 gap-2">
            {timeSlots.map((time) => (
              <Button
                key={time}
                type="button"
                variant={selectedTime === time ? "default" : "outline"}
                className={`justify-start ${
                  selectedTime === time ? "bg-brand-red hover:bg-red-700 text-white" : ""
                }`}
                onClick={() => setSelectedTime(time)}
              >
                <Clock className="mr-2 h-4 w-4" />
                {time}
              </Button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ScheduleStep;
