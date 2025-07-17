import React, { useState, useEffect } from 'react';
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Progress } from "@/components/ui/progress";
import { CheckCircle } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { useModal } from "@/hooks/useModal";

const formSchema = z.object({
    name: z.string().min(2, { message: "Name must be at least 2 characters." }),
    email: z.string().email({ message: "Please enter a valid email." }),
    phone: z.string().min(10, { message: "Please enter a valid phone number." }),
    company: z.string().optional(),
    reason: z.string().min(1, { message: "Please select a reason." }),
    message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

type FormData = z.infer<typeof formSchema>;

export const ConsultationForm: React.FC = () => {
    const { isConsultationFormOpen, closeConsultationForm } = useModal();
    const [step, setStep] = useState(1);
    const [submitted, setSubmitted] = useState(false);

    const form = useForm<FormData>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            phone: "",
            company: "",
            reason: "",
            message: "",
        }
    });

    useEffect(() => {
        if (!isConsultationFormOpen) {
            setTimeout(() => {
                form.reset();
                setStep(1);
                setSubmitted(false);
            }, 300);
        }
    }, [isConsultationFormOpen, form]);

    const onSubmit = (values: FormData) => {
        console.log("Consultation Form Submitted:", values);
        setSubmitted(true);
    };

    const nextStep = async () => {
        let fieldsToValidate: (keyof FormData)[] = [];
        if (step === 1) {
            fieldsToValidate = ['name', 'email', 'phone'];
        } else if (step === 2) {
            fieldsToValidate = ['reason', 'message'];
        }
        const isValid = await form.trigger(fieldsToValidate);
        if (isValid) {
            setStep(step + 1);
        }
    };

    const prevStep = () => {
        setStep(step - 1);
    };

    const resetAndCloseForm = () => {
        closeConsultationForm();
    }

    const progress = (step / 3) * 100;

    return (
        <Dialog open={isConsultationFormOpen} onOpenChange={closeConsultationForm}>
            <DialogContent className="glass-card p-8 md:p-12 rounded-3xl max-w-2xl w-full">
                {submitted ? (
                    <div className="flex flex-col items-center justify-center text-center p-8">
                        <CheckCircle className="w-24 h-24 text-green-400 mb-6" />
                        <h2 className="text-3xl font-bold text-white mb-4">Submission Successful!</h2>
                        <p className="text-foreground-muted mb-8">Thank you for your request. We will get back to you shortly.</p>
                        <Button onClick={resetAndCloseForm} className="neomorph-btn-primary px-8 py-4">Close</Button>
                    </div>
                ) : (
                    <>
                        <DialogHeader className="text-center mb-8">
                            <DialogTitle className="text-4xl font-light text-white mb-2">Book a Consultation</DialogTitle>
                            <DialogDescription className="text-foreground-muted">
                                {step === 1 && "Step 1: Tell us about yourself."}
                                {step === 2 && "Step 2: Tell us about your project."}
                                {step === 3 && "Step 3: Review and submit."}
                            </DialogDescription>
                        </DialogHeader>
                        <Progress value={progress} className="w-full mb-8" />
                        <Form {...form}>
                            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                                {step === 1 && (
                                    <>
                                        <FormField control={form.control} name="name" render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Name</FormLabel>
                                                <FormControl><Input placeholder="John Doe" {...field} className="bg-transparent" /></FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )} />
                                        <FormField control={form.control} name="email" render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Email</FormLabel>
                                                <FormControl><Input type="email" placeholder="john.doe@example.com" {...field} className="bg-transparent"/></FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )} />
                                        <FormField control={form.control} name="phone" render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Phone</FormLabel>
                                                <FormControl><Input type="tel" placeholder="+1 (555) 123-4567" {...field} className="bg-transparent"/></FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )} />
                                    </>
                                )}
                                {step === 2 && (
                                    <>
                                        <FormField control={form.control} name="company" render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Company (Optional)</FormLabel>
                                                <FormControl><Input placeholder="Acme Inc." {...field} className="bg-transparent"/></FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )} />
                                        <FormField control={form.control} name="reason" render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Reason for Consultation</FormLabel>
                                                <FormControl>
                                                    <select {...field} className="w-full p-2 border rounded bg-transparent glass">
                                                        <option value="" className="text-black">Select a reason...</option>
                                                        <option value="ai-integration" className="text-black">AI Integration</option>
                                                        <option value="custom-solution" className="text-black">Custom AI Solution</option>
                                                        <option value="data-analysis" className="text-black">Data Analysis & Insights</option>
                                                        <option value="automation" className="text-black">Business Process Automation</option>
                                                        <option value="other" className="text-black">Other</option>
                                                    </select>
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )} />
                                        <FormField control={form.control} name="message" render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Message</FormLabel>
                                                <FormControl><Textarea placeholder="Tell us how we can help..." {...field} className="bg-transparent"/></FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )} />
                                    </>
                                )}
                                {step === 3 && (
                                    <div className="space-y-4 p-6 rounded-lg glass-card">
                                        <h4 className="text-xl font-semibold text-white">Review Your Information</h4>
                                        <div><strong>Name:</strong> <p className="text-foreground-muted">{form.getValues("name")}</p></div>
                                        <div><strong>Email:</strong> <p className="text-foreground-muted">{form.getValues("email")}</p></div>
                                        <div><strong>Phone:</strong> <p className="text-foreground-muted">{form.getValues("phone")}</p></div>
                                        <div><strong>Company:</strong> <p className="text-foreground-muted">{form.getValues("company") || 'N/A'}</p></div>
                                        <div><strong>Reason:</strong> <p className="text-foreground-muted">{form.getValues("reason")}</p></div>
                                        <div><strong>Message:</strong> <p className="text-foreground-muted">{form.getValues("message")}</p></div>
                                    </div>
                                )}
                                <div className="flex justify-between items-center pt-6">
                                    <div>
                                        {step > 1 && <Button type="button" variant="outline" onClick={prevStep} className="neomorph-btn">Back</Button>}
                                    </div>
                                    <div>
                                        {step < 3 && <Button type="button" onClick={nextStep} className="neomorph-btn-primary">Next</Button>}
                                        {step === 3 && <Button type="submit" className="neomorph-btn-primary">Submit</Button>}
                                    </div>
                                </div>
                            </form>
                        </Form>
                    </>
                )}
            </DialogContent>
        </Dialog>
    );
}; 