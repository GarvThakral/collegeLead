import Questions from "./GotAnyQs";
const Contact =()=>{
    return(
        <div className = {'w-full h-[600px] p-5'}>
            <div className = {'w-full h-full rounded-lg shadow-xl flex items-center justify-center gap-8'}>
                <div className = {'flex flex-col w-[50%] items-start p-4 space-y-3'}>
                    <span className = {'font-bold text-4xl'}>Get in touch</span>
                    <label>Name</label>
                    <input className = {'border-2 border-gray-500 rounded-2xl w-[80%] p-1'} placeholder = {'Enter your name'}></input>
                    <label>Email</label>
                    <input className = {'border-2 border-gray-500 rounded-2xl w-[80%] p-1'} placeholder = {'your@gmail.com'}></input>
                    <label>Question</label>
                    <textarea className = {'border-2 border-gray-500 rounded-2xl w-[80%] p-4'}></textarea>
                    <button className = {'bg-blue-700 px-4 py-2 text-white rounded-xl'}>Submit</button>
                </div>
                <div className = {'w-[50%]'}>
                    
                </div>
            </div>
        </div>   
    );
}
export default Contact;