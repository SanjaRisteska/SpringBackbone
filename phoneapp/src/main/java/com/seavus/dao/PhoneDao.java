package com.seavus.dao;

import java.util.List;

import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.seavus.entities.Cart;
import com.seavus.entities.Item;
import com.seavus.entities.Phone;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

/*
  Note to Natasa & Sanja -> implement PhoneDao interface and proper Implementation

*/

@Component
public class PhoneDao {
	private final static Logger logger = LoggerFactory.getLogger(PhoneDao.class);
        
	private SessionFactory sessionFactory;
	@Autowired
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
                                logger.debug("Transaction rollback", e);
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
                                logger.debug("Transaction rollback", e);
				transaction.rollback();
			}

		} finally {
			session.close();
		}
		
	}

	public List<Cart> getCartProducts() {
		Session session = sessionFactory.openSession();
		Transaction tx = null;
		List<Cart> results = null;
		try {
			tx = session.beginTransaction();
			String hql = "FROM Cart";
			Query query = session.createQuery(hql);
			results = query.list();
			tx.commit();
		} catch (RuntimeException e) {
			if (tx != null) {
                                logger.debug("Transaction rollback", e);
				tx.rollback();
			}
		} finally {
			session.close();
		}
		return results;
	}

	public List<Item> getAllItems() {
		Session session = sessionFactory.openSession();
		Transaction tx = null;
		List<Item> results = null;
		try {
			tx = session.beginTransaction();
			String hql = "FROM Item";
			Query query = session.createQuery(hql);
			results = query.list();
			tx.commit();
		} catch (RuntimeException e) {
			if (tx != null) {
                                logger.debug("Transaction rollback", e);
				tx.rollback();
			}
		} finally {
			session.close();
		}
		return results;
	}

}
