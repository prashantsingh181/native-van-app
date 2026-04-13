import { useEffect, useRef, useState } from "react";

type FormValues = object;

type FormErrors<TValues extends FormValues> = Partial<
  Record<keyof TValues, string>
>;

type FormHandlerParams<TValues extends FormValues> = {
  initialValues: TValues;
  validate?: (values: TValues) => FormErrors<TValues>;
  onSubmit: (values: TValues) => void | Promise<void>;
};

type FormHandleReturn<TValues extends FormValues> = {
  values: TValues;
  errors: FormErrors<TValues>;
  displayErrors: FormErrors<TValues>;
  touched: Partial<Record<keyof TValues, boolean>>;
  hasTriedSubmitting: boolean;
  isSubmitting: boolean;
  handleBlur: <K extends keyof TValues>(key: K) => () => void;
  handleChange: <K extends keyof TValues>(
    key: K,
  ) => (value: TValues[K]) => void;
  setFieldValue: <K extends keyof TValues>(key: K, value: TValues[K]) => void;
  setFieldError: <K extends keyof TValues>(key: K, error: string) => void;
  setFieldTouched: <K extends keyof TValues>(key: K, touched: boolean) => void;
  handleSubmit: () => void;
  resetForm: () => void;
};

export const useFormHandler = <TValues extends FormValues>({
  initialValues,
  validate,
  onSubmit,
}: FormHandlerParams<TValues>): FormHandleReturn<TValues> => {
  const [values, setValues] = useState<TValues>(initialValues);
  const [errors, setErrors] = useState<FormErrors<TValues>>(
    validate ? validate(initialValues) : {},
  );
  const [touched, setTouched] = useState<
    Partial<Record<keyof TValues, boolean>>
  >({});
  const [hasTriedSubmitting, setHasTriedSubmitting] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const isInitialRender = useRef(true);
  const previousInitialValues = useRef(initialValues);

  const displayErrors = Object.keys(errors).reduce((acc, key) => {
    const k = key as keyof TValues;
    if (touched[k] || hasTriedSubmitting) {
      acc[k] = errors[k];
    }
    return acc;
  }, {} as FormErrors<TValues>);

  const handleChange =
    <K extends keyof TValues>(key: K) =>
    (value: TValues[K]) => {
      const nextValues = { ...values, [key]: value };
      const nextErrors = validate ? validate(nextValues) : {};
      setErrors(nextErrors);
      setValues(nextValues);
    };

  const handleBlur =
    <K extends keyof TValues>(key: K) =>
    () => {
      setFieldTouched(key, true);
    };

  const setFieldValue = <K extends keyof TValues>(
    key: K,
    value: TValues[K],
  ) => {
    const nextValues = { ...values, [key]: value };
    const nextErrors = validate ? validate(nextValues) : {};
    setErrors(nextErrors);
    setValues(nextValues);
  };

  const setFieldError = <K extends keyof TValues>(key: K, error: string) => {
    setErrors((prev) => ({ ...prev, [key]: error }));
  };

  const setFieldTouched = <K extends keyof TValues>(
    key: K,
    isTouched: boolean,
  ) => {
    setTouched((prev) => ({ ...prev, [key]: isTouched }));
  };

  const handleSubmit = () => {
    setHasTriedSubmitting(true);

    const validationErrors = validate ? validate(values) : {};
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    setIsSubmitting(true);
    Promise.resolve(onSubmit(values)).finally(() => setIsSubmitting(false));
  };

  const resetForm = () => {
    setValues(initialValues);
    setErrors(validate ? validate(initialValues) : {});
    setTouched({});
    setHasTriedSubmitting(false);
    setIsSubmitting(false);
  };

  useEffect(() => {
    if (isInitialRender.current) {
      isInitialRender.current = false;
      previousInitialValues.current = initialValues;
      return;
    }
    const deepEqual =
      JSON.stringify(previousInitialValues.current) ===
      JSON.stringify(initialValues);

    if (!deepEqual) {
      setValues(initialValues);
      previousInitialValues.current = initialValues;
      setTouched({});

      const nextErrors = validate ? validate(initialValues) : {};
      setErrors(nextErrors);
      setHasTriedSubmitting(false);
      setIsSubmitting(false);
    }
  }, [initialValues]);

  return {
    values,
    errors,
    displayErrors,
    touched,
    hasTriedSubmitting,
    isSubmitting,
    handleChange,
    handleBlur,
    setFieldValue,
    setFieldError,
    setFieldTouched,
    handleSubmit,
    resetForm,
  };
};
