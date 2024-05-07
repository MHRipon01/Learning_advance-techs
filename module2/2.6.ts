{
  //constraints

  const addCourseToStudent = <T extends {id:number; name: string; email: string}>(student: T) => {
    const course = "Next level development";
    return {
      ...student,
      course,
    };
  };


  const student3 = addCourseToStudent({emni: 'emni'}) //must use the properties which are extended like {id:number; name: string; email: string}




  const student1 = addCourseToStudent<{
    id: number;
    name: string;
    email: string;
    devType: string;
}>({
    id: 231,
    name: "mr. x",
    email: "x@gmail.com",
    devType: "NLWD",
  });


  const student2 = addCourseToStudent({
    id: 242,
    name: "mr. Y",
    email: "y@gmail.com",
    hasWatch: "apple watch",
  });

  //end
}
