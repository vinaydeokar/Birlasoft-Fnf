package com.spring.jdbc;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import com.spring.jdbc.dao.StudentDao;
import com.spring.jdbc.dao.StudentDaoImpl;
import com.spring.jdbc.entities.Student;


public class App 
{
    public static void main( String[] args )
    {
        System.out.println( "Program Started...." );
        
        ApplicationContext context= new ClassPathXmlApplicationContext("com/spring/jdbc/confijdbc.xml");
        
        StudentDao studentDao = context.getBean("studentDao",StudentDaoImpl.class);
        
///////////////////////////////////INSERT////////////////////////////////////////////////////////
//        Student student=new Student();
//        student.setId(999);
//        student.setName("Vinay9");
//        student.setCity("Nashik9");
//        
//        int result= studentDao.insert(student);
//        System.out.println("Student Added"+ result);   
/////////////////////////////////////////////////////////////////////////////////////////////////        
   
///////////////////////////////////UPDATE////////////////////////////////////////////////////////
//      Student student=new Student();
//      student.setId(2);
//      student.setName("Vinay9");
//      student.setCity("Nashik9");
//      
//      int result= studentDao.change(student);
//      System.out.println("Student updated"+ result); 
/////////////////////////////////////////////////////////////////////////////////////////////////
        
///////////////////////////////////delete////////////////////////////////////////////////////////

//int result= studentDao.delete(2);
//System.out.println("Student deleted"+ result); 
/////////////////////////////////////////////////////////////////////////////////////////////////  
  
///////////////////////////////////Select single object////////////////////////////////////////////////////////

//Student student= studentDao.getStudent(2);
//System.out.println("result is:"+ student); 
/////////////////////////////////////////////////////////////////////////////////////////////////  

///////////////////////////////////Select multiple objects////////////////////////////////////////////////////////

//List<Student> student= studentDao.getAllStudent();
//for(Student s: student){
//System.out.println("result is:"+ s); 
//}
/////////////////////////////////////////////////////////////////////////////////////////////////         
    }
}
