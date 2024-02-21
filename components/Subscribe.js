import Button from './Button';
const Subscribe = () => {
  return (
    <section
      id='contact-us'
      className='max-container flex justify-between items-center max-lg:flex-col gap-10'
    >
      <h3 className='text-4xl leading-[68px] lg:max-w-md font-palanquin font-bold'>
      Connect with Us   
        <span className='text-coral-red'> for Updates </span>& Newsletter
      </h3>
      <div className='lg:max-w-[40%] w-full flex items-center max-sm:flex-col gap-5 p-2.5 sm:border sm:border-slate-gray rounded-full'>
       <form className='flex items-center justify-center w-[100%]'>
       <input type='text' placeholder='subscribe@nike.com' className='input' />
        <div className='flex max-sm:justify-end items-center max-sm:w-full'>
        <Button label='contact us' fullWidth />
        </div>
       </form>
      </div>
    </section>
  );
};

export default Subscribe;
