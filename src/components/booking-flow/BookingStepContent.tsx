
import { useBookingContext } from "@/contexts/BookingContext";
import PersonalDetailsStep from "@/components/booking/PersonalDetailsStep";
import ScheduleStep from "@/components/booking/ScheduleStep";
import SummaryStep from "@/components/booking/SummaryStep";
import ConfirmationStep from "@/components/booking/ConfirmationStep";
import { timeSlots } from "@/data/services";

const BookingStepContent = () => {
  const {
    currentStep,
    selectedDate,
    setSelectedDate,
    selectedTime,
    setSelectedTime,
    name,
    setName,
    email,
    setEmail,
    phone,
    setPhone,
    companyName,
    setCompanyName,
    examPattern,
    setExamPattern,
    duration,
    setDuration,
    notes,
    setNotes,
    selectedService,
    handleNextStep,
    handleFinalConfirmation,
    isConfirmed,
    loading
  } = useBookingContext();

  switch(currentStep) {
    case 1:
      return (
        <PersonalDetailsStep
          name={name}
          setName={setName}
          email={email}
          setEmail={setEmail}
          phone={phone}
          setPhone={setPhone}
          companyName={companyName}
          setCompanyName={setCompanyName}
          examPattern={examPattern}
          setExamPattern={setExamPattern}
          duration={duration}
          setDuration={setDuration}
          notes={notes}
          setNotes={setNotes}
        />
      );
    
    case 2:
      return (
        <ScheduleStep
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
          selectedTime={selectedTime}
          setSelectedTime={setSelectedTime}
          timeSlots={timeSlots}
        />
      );
    
    case 3:
      return (
        <SummaryStep
          selectedService={selectedService!}
          selectedDate={selectedDate}
          selectedTime={selectedTime}
          name={name}
          email={email}
          phone={phone}
          companyName={companyName}
          examPattern={examPattern}
          duration={duration}
          handleNextStep={handleNextStep}
        />
      );
    
    case 4:
      return (
        <ConfirmationStep
          isConfirmed={isConfirmed}
          selectedService={selectedService}
          selectedDate={selectedDate}
          selectedTime={selectedTime}
          name={name}
          email={email}
          loading={loading}
          handleFinalConfirmation={handleFinalConfirmation}
        />
      );
    
    default:
      return null;
  }
};

export default BookingStepContent;
