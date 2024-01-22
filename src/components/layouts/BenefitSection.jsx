import Image from "next/image";

const BenefitSection = () => {
    return (
        <>
            <h1 className="mb-6 text-3xl font-bold text-center mt-28 text-primary">
                BENEFIT
            </h1>
            <div className="grid grid-cols-1 gap-5 px-5 mx-auto md:grid-cols-2 justify-self-center w-fit">
                <div className="flex flex-col items-center justify-end px-1 py-4 text-center bg-white rounded-lg md:px-10 drop-shadow-xl">
                    <Image
                        src="/images/analytics.png"
                        width={70}
                        height={70}
                        alt="analytics"
                    />
                    <div className="flex items-center h-20">
                        <p className="max-w-lg text-lg font-bold text-primary">
                            Kalian bisa membuat project dan dijadikan sebagai portfolio
                        </p>
                    </div>
                </div>
                <div className="flex flex-col items-center justify-end px-1 py-4 text-center bg-white rounded-lg md:px-10 drop-shadow-xl">
                    <Image
                        src="/images/team.png"
                        width={70}
                        height={70}
                        alt="analytics"
                    />
                    <div className="flex items-center h-20">
                        <p className="max-w-lg text-lg font-bold text-primary">
                            Meningkatkan kemampuan berkolaborasi dan kerjasama tim yang baik
                        </p>
                    </div>
                </div>
                <div className="flex flex-col items-center justify-start px-1 py-4 text-center bg-white rounded-lg md:px-10 drop-shadow-xl">
                    <Image
                        src="/images/relasi.png"
                        width={70}
                        height={70}
                        alt="analytics"
                    />
                    <div className="flex items-center h-20">
                        <p className="max-w-lg text-lg font-bold text-primary">
                            Meningkatkan koneksi
                        </p>
                    </div>
                </div>
                <div className="flex flex-col items-center justify-start px-1 py-4 text-center bg-white rounded-lg md:px-10 drop-shadow-xl">
                    <Image
                        src="/images/chat.png"
                        width={70}
                        height={70}
                        alt="analytics"
                    />
                    <div className="flex items-center h-20">
                        <p className="max-w-lg text-lg font-bold text-primary">
                            Meningkatkan kemampuan berkomunikasi
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BenefitSection;
