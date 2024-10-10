import { useState } from 'react';

type FormStatus = 'idle' | 'loading' | 'success' | 'error';

interface UseFormOptions<T> {
  onSubmit: (data: T) => Promise<any>;
  initialValues?: T;
}

// Custom hook
const useForm = <T>({ onSubmit, initialValues }: UseFormOptions<T>) => {
  const [status, setStatus] = useState<FormStatus>('idle');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [formValues, setFormValues] = useState<T>(initialValues || ({} as T));

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus('loading');
    setErrorMessage(null);

    try {
      await onSubmit(formValues);
      setStatus('success');
    } catch (error) {
      setStatus('error');
      setErrorMessage(error.message || 'Đã xảy ra lỗi');
    }
  };

  return {
    status,
    errorMessage,
    formValues,
    handleChange,
    handleSubmit,
  };
};

export default useForm;
