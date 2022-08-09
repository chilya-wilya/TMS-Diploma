export const scrollToTop = () =>
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });

export const validateEmail = (email: string) => {
  // prettier-ignore
  const emailRegexp = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  let isValidate: boolean;
  email.toLowerCase().match(emailRegexp)
    ? (isValidate = true)
    : (isValidate = false);
  return isValidate;
};
