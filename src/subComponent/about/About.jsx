const About = () => {
    return (
        <div className="flex flex-col md:flex-row items-center md:justify-center gap-4 lg:gap-8 w-11/12 m-auto my-4 lg:my-8">
            <div>
                <img src="https://img.freepik.com/free-photo/smiling-young-male-professional-standing-with-arms-crossed-while-making-eye-contact-against-isolated-background_662251-838.jpg" alt="" className="h-44 w-44 rounded-full object-cover object-center" />
                <div className="text-center mt-2">
                    <h2 className="text-xl font-bold">Mark Henry</h2>
                    <p>Founder</p>
                </div>
            </div>
            <div>
                <img src="https://img.freepik.com/free-photo/portrait-successful-man-having-stubble-posing-with-broad-smile-keeping-arms-folded_171337-1267.jpg" alt="" className="h-44 w-44 rounded-full object-cover object-center" />
                <div className="text-center mt-2">
                    <h2 className="text-xl font-bold">Romero</h2>
                    <p>Co-Founder</p>
                </div>
            </div>
            <div>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfnNDXYpDN3aXdBNdL8L2C3vKDKigpc4-rfFJ0q33oJS9x7fNnyuzU36SZ28UYP8OcanI&usqp=CAU" alt="" className="h-44 w-44 rounded-full object-cover object-center" />
                <div className="text-center mt-2">
                    <h2 className="text-xl font-bold">Zane</h2>
                    <p>CEO</p>
                </div>
            </div>
        </div>
    );
};

export default About;