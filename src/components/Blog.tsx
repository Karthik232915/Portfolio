import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Linkedin } from 'lucide-react';

interface BlogPost {
    id: number;
    title: string;
    description: string;
    date: string;
    images: string[];
    video?: string;
    tags: string[];
    linkedinPost?: string;
}

const sampleBlogPosts: BlogPost[] = [
    {
        id: 1,
        title: "Guest Lecture on Entrepreneurship at SRCAS",
        description: "Had an incredible opportunity to share knowledge about Entrepreneurship and Innovation with the students at Sri Ramakrishna College of Arts & Science. The interactive session covered modern software development practices and entrepreneurial mindset.",
        date: "2025-08-22",
        images: ["awards/img1.jpg", "awards/img2.jpg", "awards/img3.jpg", "awards/img4.jpg"],
        tags: ["Teaching", "Entrepreneurship", "Innovation", "Leadership", "Education"],
        linkedinPost: "https://www.linkedin.com/posts/karthik2329_entrepreneurship-leadership-youngentrepreneur-activity-7366341335299076096-3eCa?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEJJElgBINGNyWen7kGwayXyncU_kRt9iQc"
    },
    {
        id: 2,
        title: "Honored Young Entrepreneur at SRCAS 2025",
        description: "Proud moment as I received recognition at Sri Ramakrishna College of Arts & Science for entrepreneurial achievements and technological innovation in the field of software development. This award celebrates the success of ZenSol Software Solutions and our commitment to innovation.",
        date: "2025-08-27",
        images: ["awards/award1.jpg", "awards/award2.jpg", "awards/award3.jpg"],
        video: "awards/award.mp4",
        tags: ["ZenSol", "Awards", "Entrepreneurship", "Innovation", "Achievement"],
        linkedinPost: "https://www.linkedin.com/posts/karthik2329_youngentrepreneur-zensol-srcas-activity-7366324033136578560-z1ge?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEJJElgBINGNyWen7kGwayXyncU_kRt9iQc"

    },
];

const Blog: React.FC = () => {
    const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const getMaxIndex = (post: BlogPost) => {
        return post.images.length + (post.video ? 1 : 0) - 1;
    };

    const nextImage = () => {
        if (selectedPost) {
            setCurrentImageIndex((prev) => 
                prev >= getMaxIndex(selectedPost) ? 0 : prev + 1
            );
        }
    };

    const prevImage = () => {
        if (selectedPost) {
            setCurrentImageIndex((prev) => 
                prev === 0 ? getMaxIndex(selectedPost) : prev - 1
            );
        }
    };

    const handlePostSelect = (post: BlogPost) => {
        setSelectedPost(post);
        setCurrentImageIndex(0);
    };

    return (
        <section id="blog" className="py-20 bg-gray-50 dark:bg-gray-900">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">Blog</h2>
                    <p className="text-gray-600 dark:text-gray-300">Sharing my thoughts and experiences</p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {sampleBlogPosts.map((post) => (
                        <motion.div
                            key={post.id}
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.98 }}
                            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-2xl"
                        >
                            <div className="relative group cursor-pointer" onClick={() => handlePostSelect(post)}>
                                {/* Image Gallery Preview */}
                                <div className="relative h-48 overflow-hidden">
                                    <img
                                        src={post.images[0]}
                                        alt={post.title}
                                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                                    />
                                    <div className="absolute bottom-2 right-2 flex gap-2">
                                        {post.video && (
                                            <div className="bg-black bg-opacity-50 text-white px-2 py-1 rounded-full text-sm flex items-center gap-1">
                                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                </svg>
                                                <span>Video</span>
                                            </div>
                                        )}
                                        {post.images.length > 1 && (
                                            <div className="bg-black bg-opacity-50 text-white px-2 py-1 rounded-full text-sm">
                                                +{post.images.length - 1}
                                            </div>
                                        )}
                                    </div>
                                </div>

                                <div className="p-6">
                                    <div className="flex flex-wrap gap-2 mb-3">
                                        {post.tags.map((tag) => (
                                            <span
                                                key={tag}
                                                className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 rounded-full text-sm"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                    <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                                        {post.title}
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                                        {post.description}
                                    </p>
                                    <div className="flex items-center justify-between">
                                        <p className="text-sm text-gray-500 dark:text-gray-400">
                                            {new Date(post.date).toLocaleDateString()}
                                        </p>
                                        {post.linkedinPost && (
                                            <a
                                                href={post.linkedinPost}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 transition-colors"
                                                onClick={(e) => e.stopPropagation()}
                                            >
                                                <Linkedin className="w-6 h-6" />
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Modal for viewing full post and gallery */}
            {selectedPost && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
                    onClick={() => setSelectedPost(null)}
                >
                    <motion.div
                        initial={{ scale: 0.9 }}
                        animate={{ scale: 1 }}
                        exit={{ scale: 0.9 }}
                        className="bg-white dark:bg-gray-800 rounded-xl p-6 max-w-4xl w-full max-h-[90vh] overflow-y-auto"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Media Gallery */}
                            <div className="relative">
                                <div className="relative h-[400px] rounded-lg overflow-hidden bg-black">
                                    {currentImageIndex >= selectedPost.images.length && selectedPost.video ? (
                                        <motion.div
                                            key="video-container"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                            transition={{ duration: 0.3 }}
                                            className="w-full h-full flex items-center justify-center"
                                        >
                                            <video
                                                controls
                                                autoPlay
                                                className="w-full h-full object-contain"
                                                src={selectedPost.video}
                                                onError={(e) => {
                                                    console.error("Video failed to load:", e);
                                                    const target = e.target as HTMLVideoElement;
                                                    target.style.display = 'none';
                                                }}
                                            >
                                                Your browser does not support the video tag.
                                            </video>
                                        </motion.div>
                                    ) : (
                                        <motion.img
                                            key={currentImageIndex}
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                            transition={{ duration: 0.3 }}
                                            src={selectedPost.images[currentImageIndex]}
                                            alt={`${selectedPost.title} - Image ${currentImageIndex + 1}`}
                                            className="w-full h-full object-contain"
                                            onError={(e) => {
                                                console.error("Image failed to load:", e);
                                                const target = e.target as HTMLImageElement;
                                                target.src = 'https://via.placeholder.com/400x300?text=Image+Not+Found';
                                            }}
                                        />
                                    )}
                                    
                                    {/* Navigation Buttons */}
                                    <button 
                                        onClick={(e) => { e.stopPropagation(); prevImage(); }}
                                        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-75 text-white p-2 rounded-full transition-all"
                                    >
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                        </svg>
                                    </button>
                                    <button 
                                        onClick={(e) => { e.stopPropagation(); nextImage(); }}
                                        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-75 text-white p-2 rounded-full transition-all"
                                    >
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                    </button>

                                    {/* Media Counter */}
                                    <div className="absolute bottom-2 right-2 bg-black bg-opacity-50 text-white px-2 py-1 rounded-full text-sm">
                                        {currentImageIndex === selectedPost.images.length ? 'Video' : 
                                         `${currentImageIndex + 1} / ${selectedPost.images.length}${selectedPost.video ? ' + Video' : ''}`}
                                    </div>
                                </div>

                                {/* Thumbnail Navigation */}
                                <div className="flex justify-center gap-2 mt-4">
                                    {selectedPost.images.map((_, index) => (
                                        <button
                                            key={index}
                                            onClick={(e) => { e.stopPropagation(); setCurrentImageIndex(index); }}
                                            className={`w-2 h-2 rounded-full transition-all ${
                                                index === currentImageIndex 
                                                    ? 'bg-blue-600 w-4' 
                                                    : 'bg-gray-400 hover:bg-gray-600'
                                            }`}
                                        />
                                    ))}
                                    {selectedPost.video && (
                                        <button
                                            onClick={(e) => { e.stopPropagation(); setCurrentImageIndex(selectedPost.images.length); }}
                                            className={`w-2 h-2 rounded-full transition-all ${
                                                currentImageIndex === selectedPost.images.length
                                                    ? 'bg-blue-600 w-4' 
                                                    : 'bg-gray-400 hover:bg-gray-600'
                                            }`}
                                        >
                                            <span className="sr-only">Video</span>
                                        </button>
                                    )}
                                </div>
                            </div>

                            {/* Post Content */}
                            <div>
                                <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
                                    {selectedPost.title}
                                </h2>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {selectedPost.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 rounded-full text-sm"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <p className="text-gray-600 dark:text-gray-300 mb-4">
                                    {selectedPost.description}
                                </p>
                                <div className="flex items-center justify-between">
                                    <p className="text-sm text-gray-500 dark:text-gray-400">
                                        {new Date(selectedPost.date).toLocaleDateString()}
                                    </p>
                                    {selectedPost.linkedinPost && (
                                        <a
                                            href={selectedPost.linkedinPost}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 transition-colors"
                                            onClick={(e) => e.stopPropagation()}
                                        >
                                            <span className="text-sm">View on LinkedIn</span>
                                            <Linkedin className="w-5 h-5" />
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>

                        <button
                            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                            onClick={() => setSelectedPost(null)}
                        >
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </button>
                    </motion.div>
                </motion.div>
            )}
        </section>
    );
};

export default Blog;