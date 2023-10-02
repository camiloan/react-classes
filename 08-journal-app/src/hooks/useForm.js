import { useEffect, useMemo, useState } from 'react';

export const useForm = (initialForm = {}, formValidations = {}) => {
  const [formState, setFormState] = useState(initialForm);

  useEffect(() => {
    setFormState(initialForm);
  }, [initialForm]);

  const formValidation = useMemo(() => {
    const formCheckedValues = {};
    for (const formField in formValidations) {
      const [fn, errorMessage = 'Este campo es requerido.'] =
        formValidations[formField];

      formCheckedValues[`${formField}Valid`] = fn(formState[formField])
        ? null
        : errorMessage;
    }
    return formCheckedValues;
  }, [formState]);

  const isFormValid = useMemo(() => {
    for (const formValue of Object.keys(formValidation)) {
      if (formValidation[formValue] !== null) {
        return false;
      }
    }
    return true;
  }, [formValidation]);

  const onInputChange = ({ target }) => {
    const { name, value } = target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const onResetForm = () => {
    setFormState(initialForm);
  };

  return {
    ...formState,
    ...formValidation,
    formState,
    onInputChange,
    onResetForm,
    isFormValid,
  };
};
