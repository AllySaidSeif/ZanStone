// src/components/Testimonials/CommentForm.js
import React, { useState } from 'react';
import styled from 'styled-components';
import { FiStar } from 'react-icons/fi';
import { color } from '../styles/color';
import { addComment } from '../comments';

const FormContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 30px;
  background: ${color.white};
  border-radius: 12px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
`;

const FormTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 20px;
  color: ${color.textDark};
  text-align: center;
`;

const RatingContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

const RatingStar = styled(FiStar)`
  font-size: 2rem;
  cursor: pointer;
  color: ${props => props.filled ? color.primary : color.lightGray};
  margin: 0 5px;
  transition: color 0.2s ease;

  &:hover {
    color: ${color.primary};
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
`;

const FormInput = styled.input`
  width: 100%;
  padding: 12px 15px;
  border: 1px solid #ddd;
  border-radius: 6px;
  font-size: 1rem;
  transition: border 0.3s ease;

  &:focus {
    outline: none;
    border-color: ${color.primary};
  }
`;

const FormTextarea = styled.textarea`
  width: 100%;
  padding: 12px 15px;
  border: 1px solid #ddd;
  border-radius: 6px;
  font-size: 1rem;
  min-height: 150px;
  resize: vertical;
  transition: border 0.3s ease;

  &:focus {
    outline: none;
    border-color: ${color.primary};
  }
`;

const SubmitButton = styled.button`
  background: ${color.primary};
  color: ${color.textLight};
  border: none;
  padding: 15px 30px;
  border-radius: 6px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.3s ease;
  width: 100%;

  &:hover {
    background: ${color.primaryDark};
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`;

const SuccessMessage = styled.div`
  color: ${color.primary};
  text-align: center;
  margin-top: 20px;
  font-weight: 500;
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
      <FormTitle>Leave Your Review</FormTitle>
      <form onSubmit={handleSubmit}>
        <FormGroup>
          <FormLabel>Your Name</FormLabel>
          <FormInput
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
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
          <FormLabel>Your Comment</FormLabel>
          <FormTextarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
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