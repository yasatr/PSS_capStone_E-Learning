package com.pssmajor.capstone.entity;

import java.util.Date;
import java.time.Instant;
import java.util.Calendar;

import jakarta.persistence.ForeignKey;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;
import lombok.Data;
import lombok.NoArgsConstructor;

//@Entity
//@Data
//@NoArgsConstructor
public class VerificationToken {
	
//		private static final int EXPIRATION_TIME=10;
//		@Id
//		@GeneratedValue(strategy = GenerationType.IDENTITY)
//		private long tokenId;
//		private String token;
		
//		@OneToOne(fetch = FetchType.EAGER)
//		@JoinColumn(foreignKey =  @ForeignKey(name="FK_USER_VERIFY_TOKEN"))
//		private User user;
//		private Date expirationTime;
//		
//		public VerificationToken(String token,User user) {
//			super();
//			this.token=token;
//			this.user=user;
//			this.expirationTime=calculateExpirationDate(EXPIRATION_TIME);
//		}
//
//		private Date calculateExpirationDate(int expirationTime) {
//			Calendar calendar = Calendar.getInstance();
//			calendar.setTimeInMillis(new Date().getTime());
//			calendar.add(Calendar.MINUTE, expirationTime);
//			return new Date(calendar.getTime().getTime());
//		}
}
