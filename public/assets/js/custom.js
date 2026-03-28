// !(function (o) {
//     const e = "has-child-dropdown-show";
//     var t;

//     o.Dropdown.prototype.toggle = (function (originalToggle) {
//       return function () {
//         document.querySelectorAll("." + e).forEach(function (dropdown) {
//           dropdown.classList.remove(e);
//         });

//         let dropdownElement = this._element?.closest(".dropdown");
//         if (dropdownElement && dropdownElement.parentNode) {
//           dropdownElement = dropdownElement.parentNode.closest(".dropdown");
//         }

//         while (dropdownElement && dropdownElement !== document) {
//           dropdownElement.classList.add(e);
//           dropdownElement = dropdownElement.parentNode
//             ? dropdownElement.parentNode.closest(".dropdown")
//             : null;
//         }

//         return originalToggle.call(this);
//       };
//     })(o.Dropdown.prototype.toggle);

//     document.querySelectorAll(".dropdown").forEach(function (dropdown) {
//       dropdown.addEventListener("hide.bs.dropdown", function (event) {
//         if (this.classList.contains(e)) {
//           this.classList.remove(e);
//           event.preventDefault();
//         }
//         event.stopPropagation();
//       });
//     });

//     document
//       .querySelectorAll(".dropdown-hover, .dropdown-hover-all .dropdown")
//       .forEach(function (dropdownElement) {
//         dropdownElement.addEventListener("mouseenter", function (event) {
//           let trigger = event.target.querySelector(
//             ':scope>[data-bs-toggle="dropdown"]'
//           );

//           if (trigger && !trigger.classList.contains("show")) {
//             let dropdownInstance = o.Dropdown.getOrCreateInstance(trigger);
//             if (dropdownInstance) {
//               dropdownInstance.toggle();
//               dropdownElement.classList.add(e);
//               o.Dropdown.clearMenus();
//             }
//           }
//         });

//         dropdownElement.addEventListener("mouseleave", function (event) {
//           let trigger = event.target.querySelector(
//             ':scope>[data-bs-toggle="dropdown"]'
//           );

//           if (trigger && trigger.classList.contains("show")) {
//             let dropdownInstance = o.Dropdown.getOrCreateInstance(trigger);
//             if (dropdownInstance) {
//               dropdownInstance.toggle();
//             }
//           }
//         });
//       });
//   })(bootstrap);
// !(function (o) {
//     const e = "has-child-dropdown-show";
    
//     // Ensure Bootstrap Dropdown exists before modifying
//     if (!o.Dropdown || !o.Dropdown.prototype.toggle) {
//       console.error("Bootstrap Dropdown not loaded correctly.");
//       return;
//     }
  
//     var originalToggle = o.Dropdown.prototype.toggle;
  
//     o.Dropdown.prototype.toggle = function () {
//       // Remove 'has-child-dropdown-show' from all dropdowns
//       document.querySelectorAll("." + e).forEach(function (dropdown) {
//         dropdown.classList.remove(e);
//       });
  
//       // Ensure _element exists before proceeding
//       let dropdownElement = this._element?.closest(".dropdown");
//       if (dropdownElement && dropdownElement.parentNode) {
//         dropdownElement = dropdownElement.parentNode.closest(".dropdown");
//       }
  
//       // Iterate through ancestors safely
//       while (dropdownElement && dropdownElement !== document) {
//         dropdownElement.classList.add(e);
//         dropdownElement = dropdownElement.parentNode
//           ? dropdownElement.parentNode.closest(".dropdown")
//           : null;
//       }
  
//       // Ensure originalToggle exists before calling
//       if (typeof originalToggle === "function") {
//         return originalToggle.call(this);
//       } else {
//         console.error("Bootstrap Dropdown toggle function is missing.");
//       }
//     };
  
//     // Add event listener to remove class when dropdown is hidden
//     document.querySelectorAll(".dropdown").forEach(function (dropdown) {
//       dropdown.addEventListener("hide.bs.dropdown", function (event) {
//         if (this.classList.contains(e)) {
//           this.classList.remove(e);
//           event.preventDefault();
//         }
//         event.stopPropagation();
//       });
//     });
  
//     // Handle hover effect on dropdowns
//     document
//       .querySelectorAll(".dropdown-hover, .dropdown-hover-all .dropdown")
//       .forEach(function (dropdownElement) {
//         dropdownElement.addEventListener("mouseenter", function (event) {
//           let trigger = event.target.querySelector(
//             ':scope>[data-bs-toggle="dropdown"]'
//           );
  
//           if (trigger && !trigger.classList.contains("show")) {
//             let dropdownInstance = o.Dropdown.getOrCreateInstance(trigger);
//             if (dropdownInstance) {
//               dropdownInstance.toggle();
//               dropdownElement.classList.add(e);
//               o.Dropdown.clearMenus();
//             }
//           }
//         });
  
//         dropdownElement.addEventListener("mouseleave", function (event) {
//           let trigger = event.target.querySelector(
//             ':scope>[data-bs-toggle="dropdown"]'
//           );
  
//           if (trigger && trigger.classList.contains("show")) {
//             let dropdownInstance = o.Dropdown.getOrCreateInstance(trigger);
//             if (dropdownInstance) {
//               dropdownInstance.toggle();
//             }
//           }
//         });
//       });
//   })(bootstrap);
  