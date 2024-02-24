import { DevTool } from "@hookform/devtools";
import { TextField, Button, Stack } from "@mui/material";
import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import emailjs from '@emailjs/browser';
import { useTranslation } from "react-i18next";
import CustomH2 from "../components/CustomH2";
import CustomP from "../components/CustomP"
import Reveal from "../components/Reveal";
import AnimateHeight from "react-animate-height";
import { useEffect } from "react";

export const MuiContactForm = () => {

    const [height, setHeight] = useState('auto')
    const contentDiv = useRef(null);

    useEffect(() => {
        const resizeObserver = new ResizeObserver(() => {
            setHeight(contentDiv.current.clientHeight);
        });

        resizeObserver.observe(contentDiv.current);

        return () => resizeObserver.disconnect()
    }, []);

    const { t } = useTranslation()

    const form = useForm({
        defaultValues: {
            user_name: '',
            user_email: '',
            message: '',
        }
    })

    const [showEmail, setShowEmail] = useState(false)
    const [showPhone, setShowPhone] = useState(false)

    const handleShowHide = (show) => {
        if (show === "email") {
            if (showEmail) {
                setShowEmail(false)
            } else {
                setShowPhone(false)
                setShowEmail(true)
            }
        } else {
            if (showPhone) {
                setShowPhone(false)
            } else {
                setShowPhone(true)
                setShowEmail(false)
            }
        }

    }

    const formRef = useRef()

    const { register, handleSubmit, formState, control } = form
    const { errors } = formState

    const onSubmit = (data) => {

        toast(`${t('contactForm.sendingEmail')}`, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: false,
            progress: undefined,
            theme: "dark",
        });

        try {
            emailjs.sendForm('service_msa0xdq', 'template_n6a62ng', formRef.current, 'xdR9ZB5-oSCmPnz9c')
                .then((result) => {
                    toast.success(`${t('contactForm.emailSend')}`, {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: false,
                        progress: undefined,
                        theme: "dark",
                    })
                    formRef.current.reset()
                })
        }
        catch (error) {
            toast.error(`${t('contactForm.emailSendError')}`, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: false,
                progress: undefined,
                theme: "dark",
            });
        }
    }

    return (
        <>
            <div id="ContactMeId" className=" mt-4 mb-28 mx-auto w-9/12 max-w-4xl text-light">
                <Reveal>
                    <div className="mb-8">
                        <CustomH2 className='2xl:text-4xl'>{t('contactForm.title')} {`:}`}</CustomH2>
                    </div>
                </Reveal>

                <Reveal>

                    <AnimateHeight
                        height={height}
                        contentClassName="auto-content"
                        contentRef={contentDiv}
                    >
                        <div className="flex flex-col gap-4">
                            <div>
                                <Button className=" w-max" variant="outlined" onClick={() => { handleShowHide("email") }}>
                                    {showEmail ? t('contactForm.hideEmail') : t('contactForm.showEmail')}
                                </Button>
                                {showEmail && (
                                    <CustomP alignment='text-left'>sholm912@gmail.com</CustomP>
                                )}
                            </div>
                            <div>

                                <Button className=" w-max" variant="outlined" onClick={() => { handleShowHide() }}>
                                    {showPhone ? t('contactForm.hidePhone') : t('contactForm.showPhone')}
                                </Button>
                                {showPhone && (
                                    <CustomP alignment='text-left'>+45 60 67 87 04</CustomP>
                                )}
                            </div>
                        </div>
                    </AnimateHeight>
                    <form ref={formRef} onSubmit={handleSubmit(onSubmit)} noValidate>
                        <Stack spacing={2} className='mt-8'>
                            <TextField
                                name="user_name"
                                inputProps={
                                    {
                                        sx: {
                                            color: '#d3bb7b',
                                            '&::placeholder': {
                                                color: '#F2F2F2',
                                                opacity: 0.7,
                                                fontSize: '1.2rem'
                                            },
                                        },
                                    }
                                }
                                label={t('contactForm.labelName')}
                                type='text'
                                {...register('user_name', {
                                    required: t('contactForm.nameRequired'),
                                })}
                                placeholder={t('contactForm.namePlaceholder')}
                                error={!!errors.user_name}
                                helperText={errors.user_name?.message}
                            />
                            <TextField
                                name="user_email"
                                inputProps={
                                    {
                                        sx: {
                                            color: '#d3bb7b',
                                            '&::placeholder': {
                                                color: '#F2F2F2',
                                                opacity: 0.7,
                                                fontSize: '1.2rem'
                                            },
                                        },
                                    }
                                }
                                label={t('contactForm.labelEmail')}
                                type='email'
                                {...register('user_email', {
                                    required: t('contactForm.emailRequired'),
                                    pattern: {
                                        value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
                                        message: t('contactForm.emailIncorrect')
                                    }
                                })}
                                placeholder={t('contactForm.emailPlaceholder')}
                                error={!!errors.user_email}
                                helperText={errors.user_email?.message}
                            />

                            <TextField
                                name="message"
                                inputProps={
                                    {
                                        sx: {
                                            color: '#d3bb7b',
                                            '&::placeholder': {
                                                color: '#F2F2F2',
                                                opacity: 0.7,
                                                fontSize: '1.2rem'
                                            },
                                        },
                                    }
                                }
                                label={t('contactForm.labelMessage')}
                                type='text'
                                {...register('message', {
                                    required: t('contactForm.messageRequired'),
                                })}
                                placeholder={t('contactForm.messagePlaceholder')}
                                error={!!errors.message}
                                helperText={errors.message?.message}
                            />
                            <Button type='submit' variant="contained" size='large' sx={{
                                ':hover': {
                                    bgcolor: 'primary.lighterDark', // theme.palette.primary.main
                                    color: 'primary.main',
                                },
                            }}>
                                {t('contactForm.sendEmail')}
                            </Button>

                        </Stack>
                    </form>
                </Reveal>

                <Reveal>
                    <CustomP className="my-4">{t('contactForm.expectAnswer')}</CustomP>
                </Reveal>
            </div>
        </>
    )
}