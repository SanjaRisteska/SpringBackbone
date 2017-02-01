package com.seavus.dao;

import java.util.List;

import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.seavus.entities.Phone;


@Component
public class PhoneDao {
	
	@Autowired
	private SessionFactory sessionFactory;
	
	public PhoneDao(SessionFactory sessionFactory){
		this.sessionFactory = sessionFactory;
	}
	
	@SuppressWarnings("unchecked")
	public List<Phone> getAllPhones(){
		Session session = sessionFactory.openSession();
		Transaction tx = null;
		List<Phone> results = null;
		try {
			tx = session.beginTransaction();
			String hql = "FROM Phone";
			Query query = session.createQuery(hql);
			results = query.list();
			tx.commit();
		} catch (RuntimeException e) {
			if (tx != null) {
				tx.rollback();
			}
		} finally {
			session.close();
		}
		return results;
	}

	public void savePhone(Phone phone) {
		System.out.println(phone.toString());
		Session session = sessionFactory.openSession();
		Transaction transaction = null;
		try {
			transaction = session.beginTransaction();
			session.save(phone);
			transaction.commit();

		} catch (RuntimeException e) {
			if (transaction != null) {
				transaction.rollback();
			}

		} finally {
			session.close();
		}
		
	}

}
