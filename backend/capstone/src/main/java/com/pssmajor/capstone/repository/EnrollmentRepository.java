package com.pssmajor.capstone.repository;

import org.hibernate.sql.exec.spi.JdbcCallParameterExtractor;
import org.springframework.data.jpa.repository.JpaRepository;

import com.pssmajor.capstone.entity.Enrollment;

public interface EnrollmentRepository extends JpaRepository<Enrollment, Long>{

}
