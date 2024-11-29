import project2025Data from '@/lib/data/project2025'
import { SectionType, ChapterType } from '@/lib/data/project2025/types';
import { useParams } from "react-router-dom";


export const useContent = () => {
    const { chapterName, sectionName } = useParams()

    const output: {
        project2025: typeof project2025Data,
        section?: SectionType | undefined,
        chapter?: ChapterType | undefined,
    } = {
        project2025: project2025Data,
    }

    console.log(output)

    if(sectionName) {
        output.section = project2025Data?.sections.find(section => section.sectionId === sectionName) as SectionType | undefined;
    }
    if(chapterName && output.section) {
        output.chapter = output.section.chapters.find(chapter => chapter.chapterId === chapterName);
    }
    return output;
}