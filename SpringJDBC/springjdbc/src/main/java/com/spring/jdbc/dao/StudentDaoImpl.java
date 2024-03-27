package com.spring.jdbc.dao;

import java.util.List;

import javax.swing.tree.RowMapper;

import org.springframework.jdbc.core.JdbcTemplate;

import com.spring.jdbc.entities.Student;

public class StudentDaoImpl implements StudentDao{
	
	private JdbcTemplate template;

	public int insert(Student student) {
		
		String query="insert into student(id,name,city) values(?,?,?)";
		int res = this.template.update(query,student.getId(),student.getName(),student.getCity());
		return res;
	}

	public int change(Student student) {
		
		String query="update student set name=?, city=? where id=?";
		int res = this.template.update(query,student.getName(),student.getCity(),student.getId());
		return res;
	}
	
	public int delete(int studentId) {
		
		String query="delete from student where id=?";
		int res = this.template.update(query,studentId);
		return res;
	}

	public int getStudent(int studentId) {

		String query="select * from student where id=?";
		RowMapper<Student> rowMapper=new RowMapperImpl(); ///parent child
		Student student=this.template.queryForObject(query, rowMapper, studentId);
		return student;
	}

	public List<Student> getAllStudent() {
		String query="select * from student";
		List<Student> student=this.template.query(query, new RowMapperImpl());
		return student;
	}
}
