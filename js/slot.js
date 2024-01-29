import {db} from "./firebase.mjs"
import { ref } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";
    // Function to update slot colors based on booking data
    function updateSlotColors(vehicleType) {
        const slot_container = document.getElementById(`${vehicleType}-rectangular-container`);
        // Reference to the db path where slot booking data is stored
        const booked_slotRef = ref(db,`booked_slot`);
        console.log(booked_slotRef);
        // Fetch slot booking data
        booked_slotRef.once('value', (snapshot) => {
            const booked_slotData = snapshot.val();

        //     // Loop through slots and update colors based on booking data
            container.querySelectorAll('.rectangular-slot').forEach((slot, index) => {
                const slotNumber = index + 1;

                if (booked_slotData && booked_slotData[selectSlots] && booked_slotData[selectSlots].isBooked) {
                    slot.style.backgroundColor = 'red'; // Slot is booked, set color to red
                } else {
                    slot.style.backgroundColor = 'green'; // Slot is available, set color to green
                }
            });
        });
    }

    // Call the function to update slot colors when the page loads
    window.onload = function () {
        updateSlotColors('2-wheeler-rectangular-slot');
        updateSlotColors('4-wheeler-rectangular-slot');
    };

    // let isGreen = false;

// function handleSlotClick(slot) {
//     if (isGreen) {
//         slot.style.backgroundColor = 'red';
//     } else {
//         slot.style.backgroundColor = 'green';
//     }
    
//     isGreen = !isGreen;
// }
