import { useContext, useState } from "react";
import BookingContext from "../../BookingContext.jsx";
const Calendar = () => {
  // Get current date
  const currentDate = new Date();
  const currentMonth = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();

  // States for selected date, month, and year
  const [selectedDate, setSelectedDate] = useState(currentDate);
  const [displayedMonth, setDisplayedMonth] = useState(currentMonth);
  const [displayedYear, setDisplayedYear] = useState(currentYear);
  const { setDate } = useContext(BookingContext);

  // Function to get number of days in a month
  const getDaysInMonth = (year, month) => {
    return new Date(year, month + 1, 0).getDate();
  };

  // Function to get the starting day of the month
  const getStartingDayOfMonth = (year, month) => {
    return new Date(year, month, 1).getDay();
  };

  // Function to generate an array of days in the month
  const generateDaysArray = (year, month) => {
    const daysInMonth = getDaysInMonth(year, month);
    const startingDay = getStartingDayOfMonth(year, month);

    let daysArray = [];
    // Fill the days before the start of the month with empty placeholders
    for (let i = 0; i < startingDay; i++) {
      daysArray.push("");
    }
    // Fill the days of the month
    for (let i = 1; i <= daysInMonth; i++) {
      daysArray.push(i);
    }
    return daysArray;
  };

  // Generate an array of days for the current month
  const daysArray = generateDaysArray(displayedYear, displayedMonth);

  // Function to handle date selection
  const handleDateSelect = (day) => {
    const selectedDay = new Date(displayedYear, displayedMonth, day);
    const currentDate = new Date();

    // Check if the selected date is not before the current date
    if (selectedDay.getTime() >= currentDate.getTime()) {
      setSelectedDate(selectedDay);
      setDate(selectedDay);
    } else {
      // Show an error message or take appropriate action
      console.error("You can't select a date before the current date");
    }
  };

  // Function to handle changing the displayed month
  const handleChangeMonth = (direction) => {
    if (direction === "prev") {
      setDisplayedMonth(displayedMonth - 1);
    } else {
      setDisplayedMonth(displayedMonth + 1);
    }
  };

  // Function to handle changing the displayed year
  const handleChangeYear = (direction) => {
    if (direction === "prev") {
      setDisplayedYear(displayedYear - 1);
    } else {
      setDisplayedYear(displayedYear + 1);
    }
  };

  return (
    <div className="flex items-center justify-center py-8 px-4">
      <div className="max-w-sm w-full shadow-lg">
        <div className="md:p-8 p-5 dark:bg-gray-800 bg-white rounded-t">
          <div className="px-4 flex items-center justify-between">
            {/* Displayed month and year */}
            <span
              tabIndex="0"
              className="focus:outline-none text-base font-bold dark:text-gray-100 text-gray-800"
            >
              {new Date(displayedYear, displayedMonth).toLocaleDateString(
                "default",
                { month: "long", year: "numeric" }
              )}
            </span>
            {/* Buttons for navigating to previous and next months and years */}
            <div className="flex items-center">
              <button
                aria-label="calendar backward"
                onClick={() => handleChangeMonth("prev")}
                className="focus:text-gray-400 hover:text-gray-400 text-gray-800 dark:text-gray-100"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-chevron-left"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <polyline points="15 6 9 12 15 18" />
                </svg>
              </button>
              <button
                aria-label="calendar forward"
                onClick={() => handleChangeMonth("next")}
                className="focus:text-gray-400 hover:text-gray-400 ml-3 text-gray-800 dark:text-gray-100"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler  icon-tabler-chevron-right"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <polyline points="9 6 15 12 9 18" />
                </svg>
              </button>
              <button
                aria-label="calendar backward"
                onClick={() => handleChangeYear("prev")}
                className="focus:text-gray-400 hover:text-gray-400 ml-3 text-gray-800 dark:text-gray-100"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-chevron-left"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <polyline points="15 6 9 12 15 18" />
                </svg>
              </button>
              <button
                aria-label="calendar forward"
                onClick={() => handleChangeYear("next")}
                className="focus:text-gray-400 hover:text-gray-400 ml-3 text-gray-800 dark:text-gray-100"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler  icon-tabler-chevron-right"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <polyline points="9 6 15 12 9 18" />
                </svg>
              </button>
            </div>
          </div>
          {/* Table displaying days of the month */}
          <div className="flex items-center justify-between pt-12 overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr>
                  {/* Days of the week headers */}
                  {["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"].map(
                    (day, index) => (
                      <th key={index}>
                        <div className="w-full flex justify-center">
                          <p className="text-base font-medium text-center text-gray-800 dark:text-gray-100">
                            {day}
                          </p>
                        </div>
                      </th>
                    )
                  )}
                </tr>
              </thead>
              <tbody>
                {/* Render days of the month */}
                {[...Array(5)].map((_, rowIndex) => (
                  <tr key={rowIndex}>
                    {[...Array(7)].map((_, colIndex) => {
                      const day = daysArray[rowIndex * 7 + colIndex];
                      return (
                        <td key={colIndex} className="pt-6">
                          <div
                            className={`px-2 py-2 cursor-pointer flex w-full justify-center ${
                              day === "" ? "text-gray-300" : ""
                            } ${
                              selectedDate.getDate() === day
                                ? "bg-blue-500 text-white"
                                : ""
                            }`}
                            onClick={() => handleDateSelect(day)}
                          >
                            {/* Render day of the month if available */}
                            {day && <p className="text-base">{day}</p>}
                          </div>
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calendar;
