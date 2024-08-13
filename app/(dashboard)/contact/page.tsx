import { bricolageGrotesque } from '@/app/ui/fonts';

const ContactPage = () => {
  return (
    <div className='w-full py-20 text-white'>
      <div className='mx-auto max-w-screen-xl px-4'>
        <h1
          className={`${bricolageGrotesque.className} mb-8 text-center text-6xl font-bold`}
        >
          Contact Me
        </h1>
        <div className='grid grid-cols-1 gap-8 md:grid-cols-3'>
          {/* Contact Form (Spans 2 Columns) */}
          <div className='md:col-span-2'>
            <h2 className='mb-4 text-2xl font-bold'>Get in Touch</h2>
            <form className='bg-transparent'>
              <div className='mb-4'>
                <label
                  htmlFor='name'
                  className='mb-2 block text-lg font-semibold'
                >
                  Name
                </label>
                <input
                  type='text'
                  id='name'
                  placeholder='Your Name'
                  className='w-full rounded-lg border border-gray-300 bg-transparent p-3 text-white'
                />
              </div>
              <div className='mb-4'>
                <label
                  htmlFor='email'
                  className='mb-2 block text-lg font-semibold'
                >
                  Email
                </label>
                <input
                  type='email'
                  id='email'
                  placeholder='Your Email'
                  className='w-full rounded-lg border border-gray-300 bg-transparent p-3 text-white'
                />
              </div>
              <div className='mb-4'>
                <label
                  htmlFor='message'
                  className='mb-2 block text-lg font-semibold'
                >
                  Message
                </label>
                <textarea
                  id='message'
                  placeholder='Your Message'
                  rows='4'
                  className='w-full rounded-lg border border-gray-300 bg-transparent p-3 text-white'
                />
              </div>
              <button
                type='submit'
                className='w-full rounded-lg bg-blue-500 py-3 font-semibold text-white hover:bg-blue-600'
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Social Links */}
          <div className='flex flex-col items-center'>
            <h2 className='mb-4 text-2xl font-bold'>Follow Me</h2>
            <a
              href='https://twitter.com'
              target='_blank'
              rel='noopener noreferrer'
              className='mb-2 text-blue-500'
            >
              Twitter
            </a>
            <a
              href='https://linkedin.com'
              target='_blank'
              rel='noopener noreferrer'
              className='mb-2 text-blue-500'
            >
              LinkedIn
            </a>
            <a
              href='https://github.com'
              target='_blank'
              rel='noopener noreferrer'
              className='text-blue-500'
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
