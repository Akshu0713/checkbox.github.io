// script.js
document.addEventListener('DOMContentLoaded', () => {
    const selectAllCheckbox = document.getElementById('selectAll');
    const pageCheckboxes = document.querySelectorAll('.page-checkbox');
    
    selectAllCheckbox.addEventListener('change', () => {
      pageCheckboxes.forEach(checkbox => {
        checkbox.checked = selectAllCheckbox.checked;
      });
    });
    
    pageCheckboxes.forEach(checkbox => {
      checkbox.addEventListener('change', () => {
        if ([...pageCheckboxes].every(cb => cb.checked)) {
          selectAllCheckbox.checked = true;
        } else {
          selectAllCheckbox.checked = false;
        }
      });
    });
  });
  