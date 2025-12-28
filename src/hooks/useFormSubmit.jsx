export const useFormSubmit = () => {
  const handleOnSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    form.reset();
  };

  return handleOnSubmit;
};
