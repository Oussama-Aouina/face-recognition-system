'use client';

import Image from 'next/image';
import { useRef, useState } from 'react';
import { AiOutlineCamera, AiOutlineFileAdd } from 'react-icons/ai';
import { FiUploadCloud } from 'react-icons/fi';

interface Image {
    name: string;
    size: number;
    url: string;
}

export default function FilesDisplayer({
    activateComparing,
}: {
    activateComparing: Function;
}): JSX.Element {
    const fileInputRef = useRef<HTMLInputElement>(null);
    const handleFileInput = () => {
        fileInputRef.current?.click();
    };
    const [image, setImage] = useState<Image>();
    const [isDragging, setIsDragging] = useState<true | false>(false);
    // function handleFiles(files: FileList) {
    //     if (files.length == 0) return;
    //     for (let i = 0; i < files.length; i++) {
    //         const file = files[i];
    //         if (!file.type.startsWith('image/')) {
    //             continue;
    //         }
    //         if (!images.some((image) => image.name === file.name)) {
    //             setImages((prev) => [
    //                 ...prev,
    //                 {
    //                     name: file.name,
    //                     size: file.size,
    //                     url: URL.createObjectURL(file),
    //                 },
    //             ]);
    //         }
    //     }
    // }
    function handleImageChange(file: File) {
        if (!file) return;
        if (!file.type.startsWith('image/')) {
            return;
        }
        setImage({
            name: file.name,
            size: file.size,
            url: URL.createObjectURL(file),
        });
        activateComparing(true);
        console.log(file);
    }
    function handleFileChange(e: any) {
        const file = e.target.files[0];
        handleImageChange(file);
    }
    function onDragOver(e: any) {
        e.preventDefault();
        if (image) return;
        setIsDragging(true);
    }
    function onDragLeave(e: any) {
        e.preventDefault();
        setIsDragging(false);
    }
    function onDrop(e: any) {
        e.preventDefault();
        setIsDragging(false);
        if (image) return;
        const file = e.dataTransfer.files[0];
        // handleFiles(files);
        handleImageChange(file);
    }

    return (
        <div className=" animate-slidein flex h-[425px] w-full border-spacing-10 flex-col gap-6 overflow-hidden rounded-xl border-2 border-dashed border-[#6B43FF] bg-[#021D42] opacity-0 [--slidein-delay:500ms] ">
            <div className="bg-[#01132B] px-20 pt-2">
                <ul className="max-lg:justify-center flex w-full gap-4">
                    <li
                        className="flex h-full flex-col-reverse 
                        items-center border-b-2 border-activeElement px-3 pb-2 text-sm font-normal text-activeElement "
                    >
                        <label htmlFor="">Upload file</label>
                        <AiOutlineFileAdd className="text-2xl font-semibold" />
                    </li>
                    <li
                        className="flex h-full 
                        flex-col-reverse items-center px-5 pb-2 text-sm font-normal text-borderDropzone "
                    >
                        <label htmlFor="">Camera</label>
                        <AiOutlineCamera className="text-2xl font-semibold" />
                    </li>
                </ul>
            </div>
            <div
                className="flex h-full w-full flex-col items-center justify-center px-20   pb-10 font-normal text-secondaryText"
                onDragOver={onDragOver}
                onDragLeave={onDragLeave}
                onDrop={onDrop}
            >
                <div className="flex h-full w-full flex-col items-center  rounded-xl border border-borderDropzone bg-bgDropzone text-sm">
                    {/*the input file to trigger it */}
                    <input
                        type="file"
                        className="hidden"
                        ref={fileInputRef}
                        onChange={handleFileChange}
                    />
                    {isDragging ? (
                        <p className="text-secondaryText">
                            Drop the image here
                        </p>
                    ) : (
                        !image && (
                            <div className="flex h-full w-full flex-col items-center justify-center gap-8 p-8">
                                <FiUploadCloud className="text-2xl" />
                                <p>drag and drop your image</p>
                                <span>Or</span>
                                <button
                                    onClick={handleFileInput}
                                    className="block rounded-full bg-activeElement px-6 py-2 text-white shadow-md"
                                >
                                    Browse files
                                </button>
                            </div>
                        )
                    )}
                    {
                        //if there are images we display them horizontally here
                        image && (
                            <div className=" sm:flex-row flex h-full w-full flex-col gap-4 p-4">
                                <div className="relative h-full w-full border border-red-600">
                                    <Image
                                        src={image.url}
                                        alt="image"
                                        className="overflow-hidden object-contain"
                                        fill
                                    />
                                </div>
                                <div className="relative h-full w-full">
                                    <Image
                                        src={'/images/cin.png'}
                                        alt="image"
                                        className="overflow-hidden object-contain"
                                        fill
                                    />
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    );
}
