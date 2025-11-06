// src/components/Testimonials/CommentForm.js
import React, { useState } from 'react';
import styled from 'styled-components';
import { FiStar, FiUser, FiMessageSquare } from 'react-icons/fi';
import { color } from '../styles/color';
import { addComment } from '../comments';

const FormContainer = styled.div`
  max-width: 500px;
  margin: 0 auto;
  padding: 32px;
  background: ${color.white};
  border-radius: 16px;
  border: 1px solid #f1f5f9;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
`;

const FormTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 24px;
  color: ${color.textDark};
  text-align: center;
  font-weight: 600;
`;

const RatingContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 24px;
  gap: 4px;
`;

const RatingStar = styled(FiStar)`
  font-size: 2rem;
  cursor: pointer;
  color: ${props => props.filled ? color.primary : '#e2e8f0'};
  transition: all 0.2s ease;
  
  &:hover {
    color: ${color.primary};
    transform: scale(1.1);
  }
`;

const FormGroup = styled.div`
  margin-bottom: 20px;
`;

const FormLabel = styled.label`
  display: block;
  margin-bottom: 8px;
  font-weight: 500;
  color: ${color.textDark};
  font-size: 0.9rem;
`;

const FormInput = styled.input`
  width: 100%;
  padding: 12px 16px;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  font-size: 1rem;
  transition: all 0.2s ease;
  background: #fafbfc;

  &:focus {
    outline: none;
    border-color: ${color.primary};
    background: ${color.white};
    box-shadow: 0 0 0 3px rgba(79, 70, 229, 0.08);
  }
`;

const FormTextarea = styled.textarea`
  width: 100%;
  padding: 12px 16px;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  font-size: 1rem;
  min-height: 120px;
  resize: vertical;
  transition: all 0.2s ease;
  background: #fafbfc;
  line-height: 1.5;

  &:focus {
    outline: none;
    border-color: ${color.primary};
    background: ${color.white};
    box-shadow: 0 0 0 3px rgba(79, 70, 229, 0.08);
  }
`;

const SubmitButton = styled.button`
  background: ${color.primary};
  color: ${color.textLight};
  border: none;
  padding: 14px 28px;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  width: 100%;
  
  &:hover {
    background: ${color.primaryDark};
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(79, 70, 229, 0.2);
  }

  &:active {
    transform: translateY(0);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
  }
`;

const SuccessMessage = styled.div`
  color: #059669;
  text-align: center;
  margin-top: 16px;
  font-weight: 500;
  padding: 12px;
  background: #ecfdf5;
  border-radius: 8px;
  border: 1px solid #a7f3d0;
`;

const ContactForm = ({ onCommentAdded }) => {
  const [name, setName] = useState('');
  const [comment, setComment] = useState('');
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const newComment = {
        name,
        comment,
        rating,
        avatar_url: `https://source.unsplash.com/random/200x200/?portrait,${name}`,
        created_at: new Date().toISOString()
      };

      await addComment(newComment);
      setSuccess(true);
      setName('');
      setComment('');
      setRating(0);
      
      if (onCommentAdded) {
        onCommentAdded();
      }

      setTimeout(() => setSuccess(false), 3000);
    } catch (error) {
      console.error('Error submitting comment:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <FormContainer>
      <FormTitle>Share Your Feedback</FormTitle>
      <form onSubmit={handleSubmit}>
        <FormGroup>
          <FormLabel>Your Name</FormLabel>
          <FormInput
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
            required
          />
        </FormGroup>

        <FormGroup>
          <FormLabel>Rating</FormLabel>
          <RatingContainer>
            {[1, 2, 3, 4, 5].map((star) => (
              <RatingStar
                key={star}
                filled={star <= (hoverRating || rating)}
                onMouseEnter={() => setHoverRating(star)}
                onMouseLeave={() => setHoverRating(0)}
                onClick={() => setRating(star)}
              />
            ))}
          </RatingContainer>
        </FormGroup>

        <FormGroup>
          <FormLabel>Your Review</FormLabel>
          <FormTextarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Share your experience..."
            required
          />
        </FormGroup>

        <SubmitButton type="submit" disabled={isSubmitting || !name || !comment || rating === 0}>
          {isSubmitting ? 'Submitting...' : 'Submit Review'}
        </SubmitButton>

        {success && (
          <SuccessMessage>
            Thank you for your review! It will be displayed soon.
          </SuccessMessage>
        )}
      </form>
    </FormContainer>
  );
};

export default ContactForm;