import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import { Controller, useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"

type Props = {}

const OTP_LENGTH = 6

const otpFormSchema = z.object({
  otp: z
    .string()
    .length(OTP_LENGTH, {
      message: `Code must be exactly ${OTP_LENGTH} digits.`,
    })
    .regex(/^\d+$/, { message: "Code must contain digits only." }),
})

type OtpFormValues = z.infer<typeof otpFormSchema>

export default function OtpForm({}: Props) {
  const form = useForm<OtpFormValues>({
    resolver: zodResolver(otpFormSchema),
    defaultValues: { otp: "" },
    mode: "onChange",
  })

  const {
    formState: { isValid, isSubmitting },
  } = form

  function onSubmit(values: OtpFormValues) {
    console.log(values)
  }

  return (
    <form onSubmit={form.handleSubmit(onSubmit)}>
      <FieldGroup>
        <Controller
          name="otp"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor="form-rhf-demo-title">OTP</FieldLabel>
              <InputOTP {...field} maxLength={OTP_LENGTH} defaultValue="">
                <InputOTPGroup className="flex items-center gap-3 rounded-none">
                  {Array.from({ length: OTP_LENGTH }).map((_, index) => (
                    <InputOTPSlot
                      className="rounded-sm border-2 border-primary p-5"
                      index={index}
                    />
                  ))}
                </InputOTPGroup>
              </InputOTP>
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />
      </FieldGroup>
      <Button
        type="submit"
        disabled={!isValid || isSubmitting}
        className="mt-10 w-full"
      >
        Continue
      </Button>
    </form>
  )
}
