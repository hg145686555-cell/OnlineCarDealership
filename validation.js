/* 
   Online Car Dealership — validation.js
   Client-side validation for the Booking and Contact forms.
    */

const VALIDATION_PATTERNS = {
  name: /^[A-Za-z\s'-]{2,50}$/,
  email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  phone: /^\+?[0-9\s-]{7,15}$/,
};

/**
 * Validate a single field's value against a rule set.
 * Returns an error message string, or "" if valid.
 */
function validateField(name, value, required = true) {
  const trimmed = value.trim();

  if (required && trimmed === "") return "This field is required.";
  if (!required && trimmed === "") return "";

  switch (name) {
    case "fullName":
      return VALIDATION_PATTERNS.name.test(trimmed) ? "" : "Enter a valid name (letters only, 2-50 characters).";
    case "email":
      return VALIDATION_PATTERNS.email.test(trimmed) ? "" : "Enter a valid email address.";
    case "phone":
      return VALIDATION_PATTERNS.phone.test(trimmed) ? "" : "Enter a valid phone number.";
    case "date": {
      const selected = new Date(trimmed);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      return selected >= today ? "" : "Please choose a today-or-future date.";
    }
    default:
      return "";
  }
}

/**
 * Apply Bootstrap validity classes + inline feedback text to an input.
 */
function setFieldValidity(inputEl, errorMessage) {
  const feedbackEl = inputEl.parentElement.querySelector(".invalid-feedback");
  if (errorMessage) {
    inputEl.classList.add("is-invalid");
    inputEl.classList.remove("is-valid");
    if (feedbackEl) feedbackEl.textContent = errorMessage;
  } else {
    inputEl.classList.remove("is-invalid");
    inputEl.classList.add("is-valid");
  }
}

/**
 * Wire up live + submit validation for a given form.
 * fieldConfig: { inputId: { name: "email", required: true }, ... }
 */
function initFormValidation(formId, fieldConfig, onValidSubmit) {
  const form = document.getElementById(formId);
  if (!form) return;

  const inputs = Object.keys(fieldConfig).map((id) => document.getElementById(id));

  inputs.forEach((input) => {
    if (!input) return;
    input.addEventListener("blur", () => {
      const config = fieldConfig[input.id];
      const error = validateField(config.name, input.value, config.required);
      setFieldValidity(input, error);
    });
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    let isFormValid = true;

    inputs.forEach((input) => {
      if (!input) return;
      const config = fieldConfig[input.id];
      const error = validateField(config.name, input.value, config.required);
      setFieldValidity(input, error);
      if (error) isFormValid = false;
    });

    if (isFormValid) {
      onValidSubmit(form);
      form.reset();
      inputs.forEach((input) => input && input.classList.remove("is-valid", "is-invalid"));
    } else {
      showToast("Please fix the highlighted fields.", "danger");
    }
  });
}
