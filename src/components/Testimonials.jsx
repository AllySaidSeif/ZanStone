// src/components/Testimonials/UserComments.js
import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FiChevronLeft, FiChevronRight, FiStar } from 'react-icons/fi';
import { color } from '../styles/color';
import { getComments } from '../comments';
import SectionTitle from './SectionTitle';
import { supabase } from '../supabase';
import users from "../assets/image/user.jpg" ;

const Section = styled.section`
  padding: 80px 0;
  background: ${color.secondary};
`;

const CommentsContainer = styled.div`
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 40px;
`;

const ScrollContainer = styled.div`
  overflow-x: auto;
  scroll-behavior: smooth;
  -webkit-overflow-scrolling: touch;
  padding: 30px 0;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const CommentsWrapper = styled.div`
  display: inline-flex;
  gap: 30px;
  padding: 0 10px;
`;

const CommentCard = styled(motion.div)`
  min-width: 350px;
  background: ${color.white};
  border-radius: 12px;
  padding: 30px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
`;

const CommentHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const Avatar = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 15px;
`;

const UserInfo = styled.div`
  h4 {
    margin: 0 0 5px 0;
    font-size: 1.1rem;
  }

  p {
    margin: 0;
    color: #777;
    font-size: 0.9rem;
  }
`;

const Rating = styled.div`
  display: flex;
  margin-top: 5px;

  svg {
    color: ${color.primary};
    margin-right: 2px;
  }
`;

const CommentText = styled.p`
  flex-grow: 1;
  font-style: italic;
  color: #555;
  line-height: 1.6;
  margin-bottom: 20px;
`;

const CommentDate = styled.p`
  color: #999;
  font-size: 0.85rem;
  text-align: right;
`;

const NavButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: ${color.white};
  border: none;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  z-index: 10;
  transition: all 0.3s ease;

  &:hover {
    background: ${color.lightGray};
    transform: translateY(-50%) scale(1.1);
  }
`;

const PrevButton = styled(NavButton)`
  left: 0;
`;

const NextButton = styled(NavButton)`
  right: 0;
`;

const Testimonials = () => {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const scrollRef = useRef(null);

 useEffect(() => {
  const fetchComments = async () => {
    try {
      const data = await getComments();
      setComments(data);
    } catch (error) {
      console.error('Error loading comments:', error);
    } finally {
      setLoading(false);
    }
  };

  fetchComments();

  // Set up real-time subscription
  const subscription = supabase
    .channel('comments_changes')
    .on(
      'postgres_changes',
      {
        event: 'INSERT',
        schema: 'public',
        table: 'comments'
      },
      () => fetchComments()
    )
    .subscribe();

  return () => {
    supabase.removeChannel(subscription);
  };
}, []);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const scrollAmount = direction === 'left' ? -400 : 400;
      current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  if (loading) {
    return (
      <Section id="testimonials">
        <CommentsContainer>
          <SectionTitle>What Our Guests Say</SectionTitle>
          <p>Loading comments...</p>
        </CommentsContainer>
      </Section>
    );
  }

  if (comments.length === 0) {
    return (
      <Section id="testimonials">
        <CommentsContainer>
          <SectionTitle>What Our Guests Say</SectionTitle>
          <p>No comments yet. Be the first to leave a review!</p>
        </CommentsContainer>
      </Section>
    );
  }

  return (
    <Section id="testimonials">
      <CommentsContainer>
        <SectionTitle>What Our Guests Say</SectionTitle>
        
        <PrevButton onClick={() => scroll('left')}>
          <FiChevronLeft size={24} />
        </PrevButton>
        
        <ScrollContainer ref={scrollRef}>
          <CommentsWrapper>
            {comments.map((comments, index) => (
              <CommentCard
                key={comments.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <CommentHeader>
                  <Avatar 
                    src={users} 
                    alt={comments.name} 
                  />
                  <UserInfo>
                    <h4>{comments.name}</h4>
                    <Rating>
                      {[...Array(5)].map((_, i) => (
                        <FiStar 
                          key={i} 
                          fill={i < comments.rating ? color.primary : 'transparent'} 
                        />
                      ))}
                    </Rating>
                  </UserInfo>
                </CommentHeader>
                <CommentText>"{comments.comment}"</CommentText>
                <CommentDate>
                  {new Date(comments.created_at).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </CommentDate>
              </CommentCard>
            ))}
          </CommentsWrapper>
        </ScrollContainer>

        <NextButton onClick={() => scroll('right')}>
          <FiChevronRight size={24} />
        </NextButton>
      </CommentsContainer>
    </Section>
  );
};

export default Testimonials;