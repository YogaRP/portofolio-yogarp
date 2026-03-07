import { Send } from 'lucide-react';
import React, { useRef, useState } from 'react'
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { Label } from '../ui/label';
import { Controller, useForm } from 'react-hook-form';
import { CollabRequestFormData, collabRequestSchema } from '@/features/requests/schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { Field, FieldError, FieldGroup, FieldLabel } from '../ui/field';
import { InputGroup, InputGroupAddon, InputGroupText, InputGroupTextarea } from '../ui/input-group';
import { useCreateCollabRequest } from '@/features/requests/hooks';
import { Request } from '@/lib/types';
import { toast } from 'sonner';

const ContactMeForm = () => {

    const requestCollab = useCreateCollabRequest()
    const fileInputRef = useRef<HTMLInputElement | null>(null)

    const form = useForm<CollabRequestFormData>({
        resolver: zodResolver(collabRequestSchema),
        defaultValues: {
            name: "",
            email: "",
            subject: "",
            message: "",
            attachment: undefined,
        },
    });

    const onSubmit = async (data: CollabRequestFormData) => {
        const formData = new FormData()

        formData.append("name", data.name)
        formData.append("email", data.email)
        formData.append("subject", data.subject)
        formData.append("message", data.message)

        if (data.attachment) {
            formData.append("attachment", data.attachment)
        }

        requestCollab.mutate(formData as Partial<Request>, {
            onSuccess: () => {
                if (fileInputRef.current) {
                    fileInputRef.current.value = ""
                }
                form.reset()
                toast("Message sent successfully!", { position: "bottom-center" });
            },
            onError: () => {
                toast("Failed to send message. Please try again.", { position: "bottom-center" });
            }
        })
    };

    return (
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FieldGroup>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                        <Controller
                            name='name'
                            control={form.control}
                            render={({ field, fieldState }) => (
                                <Field data-invalid={fieldState.invalid}>
                                    <FieldLabel htmlFor="name">Name</FieldLabel>
                                    <Input
                                        {...field}
                                        aria-invalid={fieldState.invalid}
                                        placeholder="Yoga Rizky Putra"
                                    />
                                    {fieldState.invalid && (
                                        <FieldError errors={[fieldState.error]} />
                                    )}
                                </Field>
                            )}
                        />
                    </div>
                    <div className="space-y-2">
                        <Controller
                            name='email'
                            control={form.control}
                            render={({ field, fieldState }) => (
                                <Field data-invalid={fieldState.invalid}>
                                    <FieldLabel htmlFor="email">Email</FieldLabel>
                                    <Input
                                        {...field}
                                        aria-invalid={fieldState.invalid}
                                        placeholder="yoga@gmail.com"
                                    />
                                    {fieldState.invalid && (
                                        <FieldError errors={[fieldState.error]} />
                                    )}
                                </Field>
                            )}
                        />
                    </div>
                </div>

                <div className="space-y-2">
                    <Controller
                        name='subject'
                        control={form.control}
                        render={({ field, fieldState }) => (
                            <Field data-invalid={fieldState.invalid}>
                                <FieldLabel htmlFor="subject">Subject</FieldLabel>
                                <Input
                                    {...field}
                                    aria-invalid={fieldState.invalid}
                                    placeholder="Let's Collab"
                                />
                                {fieldState.invalid && (
                                    <FieldError errors={[fieldState.error]} />
                                )}
                            </Field>
                        )}
                    />
                </div>

                <div className="space-y-2">
                    <Controller
                        name='message'
                        control={form.control}
                        render={({ field, fieldState }) => (
                            <Field data-invalid={fieldState.invalid}>
                                <FieldLabel htmlFor="message">Message</FieldLabel>
                                <InputGroup>
                                    <InputGroupTextarea
                                        {...field}
                                        rows={6}
                                        className="min-h-24 resize-none"
                                        aria-invalid={fieldState.invalid}
                                        placeholder="Hi Yoga, Let's collab/I have some opportunity/I have some question..."
                                    />
                                    <InputGroupAddon align="block-end">
                                        <InputGroupText className="tabular-nums">
                                            {field.value.length}/500 characters
                                        </InputGroupText>
                                    </InputGroupAddon>
                                    {fieldState.invalid && (
                                        <FieldError errors={[fieldState.error]} />
                                    )}
                                </InputGroup>
                            </Field>
                        )}
                    />
                </div>

                <div className="space-y-2">
                    <Controller
                        name='attachment'
                        control={form.control}
                        render={({ field: { onChange, value, ...field }, fieldState }) => (
                            <Field data-invalid={fieldState.invalid}>
                                <FieldLabel htmlFor="attachment">Attachment (optional)</FieldLabel>
                                <Input
                                    {...field}
                                    ref={fileInputRef}
                                    type='file'
                                    aria-invalid={fieldState.invalid}
                                    onChange={(e) => onChange(e.target.files?.[0])}
                                />
                                {fieldState.invalid && (
                                    <FieldError errors={[fieldState.error]} />
                                )}
                            </Field>
                        )}
                    />
                </div>

                <Button
                    type="submit"
                    className="w-full"
                    disabled={requestCollab.isPending}
                >
                    {requestCollab.isPending ? (
                        <>
                            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                            Sending...
                        </>
                    ) : (
                        <>
                            <Send className="w-4 h-4 mr-2" />
                            Send Message
                        </>
                    )}
                </Button>
            </FieldGroup>
        </form>
    )
}

export default ContactMeForm
