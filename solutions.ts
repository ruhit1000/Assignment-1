const multiplyValue = (value: number, multiplier: number = 2) : number => {
    return value * multiplier
}

const processInput = (value: number|string|boolean): string | number => {
    if (typeof value === "string") return value.trim().toLowerCase()
    if (typeof value === "number") return value * 10
    if (value === true) return "Active"
    return "Inactive"
}

const formatCoordinate = (coord: readonly [number, number, string]): string => {
    const [latitude, longitude, location] = coord
    return `Location: ${location} (${latitude}, ${longitude})`;
}

const concatenateArrays = <T>(...arrays : T[]) => {
    return arrays.flat()
}

interface Course {
    title: string
    students: number
    isPublished: boolean
}

const getPopularCourses = (courses: Course[], minStudents: number): Course[] => {
    return courses.filter(
    (course) => course.isPublished && course.students >= minStudents
    );
}

const courses = [
  { title: "TypeScript Mastery", students: 120, isPublished: true },
  { title: "Draft Course", students: 200, isPublished: false },
  { title: "Basic HTML", students: 45, isPublished: true },
  { title: "Next.js Pro", students: 85, isPublished: true }
];

console.log(getPopularCourses(courses, 80))