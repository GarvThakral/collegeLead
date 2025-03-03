const Hero=()=>{
    return(
        <section className = {'text-3xl text-white '}>
            <div className="relative">
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 space-y-4">
                    <h4 className="text-3xl font-bold text-white">
                    Your Pathway to top tier education and success
                    </h4>
                    
                    <p className="text-white max-w-2xl">
                    Mollit incididunt minim et aute ut culpa excepteur. Irure veniam nulla laboris laborum aliqua duis mollit esse sit c
                    </p>
                    
                    <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded mt-4">
                    Find Out More
                    </button>
                </div>
                
                <div>
                    <img src="/headImg.png" alt="headiMg" className="w-full"/>
                </div>
            </div>
        </section>
    );
}
export default Hero;