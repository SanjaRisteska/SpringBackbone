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

	public void saveCartItem(Item item) {
		System.out.println(item.toString());
		Session session = sessionFactory.openSession();
		Transaction transaction = null;
		try {
			transaction = session.beginTransaction();
			session.save(item);
			Cart cart = new Cart(item);
			session.save(cart);
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

	public void updateCartItem(Item item) {
		Session session = sessionFactory.openSession();
		Transaction tx = null;
		List<Item> results = null;
		try {
			tx = session.beginTransaction();
			Query query = session.createQuery("update Item set quantity = :quantity" +
    				" where id = :id");
			query.setParameter("quantity", item.getQuantity()+1);
			query.setParameter("id", item.getId());
			int result = query.executeUpdate();
			tx.commit();
		} catch (RuntimeException e) {
			if (tx != null) {
                                logger.debug("Transaction rollback", e);
				tx.rollback();
			}
		} finally {
			session.close();
		}
		
	}

	public void deleteCartItem(Item item) {
		Session session = sessionFactory.openSession();
		Transaction transaction = null;
		try {
			transaction = session.beginTransaction();

			String hql = "DELETE FROM Cart WHERE product_id = :id";
			Query query = session.createQuery(hql);
			query.setParameter("id", item.getId());
			query.executeUpdate();
			
			hql = "DELETE FROM Item WHERE id = :id";
			query = session.createQuery(hql);
			query.setParameter("id", item.getId());
			query.executeUpdate();

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
