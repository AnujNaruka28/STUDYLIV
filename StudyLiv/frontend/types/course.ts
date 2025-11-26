export interface SubSection {
    id: string;
    videotitle?: string;
    description: string;
    duration: string;
    videoUrl?: string;
    contentType?: 'live' | 'video' | 'instructor_questions';
    practicetitle?: string;
    questions?: string[];
}

export interface Section {
    id: string;
    sectionName: string;
    subSections: SubSection[];
}

export interface Course {
    id: string;
    courseName: string;
    courseDescription?: string;
    duration: string;
    instructor: string;
    whatYouWillLearn?: string;
    courseContent?: Section[];
    ratingAndReviews?: string[];
    price: number;
    thumbnail?: string;
    tag?: string[];
    category: string;
    studentsEnrolled?: string[];
    createdAt: Date;
    updatedAt: Date;
}