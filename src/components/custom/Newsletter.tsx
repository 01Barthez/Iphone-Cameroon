import React from 'react'
import { Link } from 'react-router-dom'
import NewsletterForm from './utils/NewsletterForm'

const Newsletter: React.FC = () => {
    return (
        <section className='bg-gradient-to-br from-foreground/70 via-slate-800/90 to-foreground/80 dark:from-slate-900/80 dark:via-slate-800 dark:to-background py-6 md:py-10 lg:py-12'>
            <div className="container flex flex-col items-center gap-6 lg:gap-8">
                <h3 className="text-center text-3xl md:text-4xl text-footer-foreground font-light">
                    Sign up for <span className="font-medium">our newsletter</span>
                </h3>

                <p className="max-w-full md:max-w-[85%] lg:max-w-[70%] text-center text-sm md:text-base text-footer-foreground/90 ">
                    Would you like to be notified when there are new products, promotions or sales?
                    Subscribe to our newsletter and you will be among the first to know.
                </p>

                {/* Form of newsletter */}
                <div className="flex flex-col items-center gap-6">
                    {/* Newsletter form */}
                    <NewsletterForm />

                    {/* Notification */}
                    <p className="text-center text-xs md:text-sm text-footer-foreground/80">
                        By subscribing, you agree with Our <br className="md:hidden"/>
                        <Link
                            to={'/terms-and-conditions'}
                            className='text-sky-400 hover:underline duration-300'
                        >
                            Terms of Use
                        </Link>
                        &nbsp;and&nbsp;
                        <Link
                            to={'/privacy-policy'}
                            className='text-sky-400 hover:underline duration-300'
                        >
                            Privacy Policy.
                        </Link>
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Newsletter
