// src/components/common/FloatingActionButtons.js
import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { FiPlus, FiMail, FiMessageCircle } from 'react-icons/fi';
import BookingFormModal from '../components/BookingFormModal'; // <-- Your booking form modal component
import { color } from '../styles/color';

// ---------- Floating Button Wrapper ----------
const Container = styled.div`
  position: fixed;
  bottom: 30px;
  right: 30px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 12px;
  z-index: 2000;
`;

// ---------- Individual Tool Buttons ----------
const ToolButton = styled(motion.button)`
  background: ${color.primary};
  color: ${color.textLight};
  border: none;
  outline: none;
  padding: 14px;
  border-radius: 50%;
  cursor: pointer;
  font-size: 1.3rem;
  box-shadow: 0 4px 14px rgba(0,0,0,0.25);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  &:hover {
    background: ${color.primaryDark};
  }
`;

// ---------- Text Label ----------
const Label = styled(motion.span)`
  background: #ffffff;
  color: #222;
  font-size: .9rem;
  padding: 8px 14px;
  border-radius: 10px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.12);
  margin-right: 10px;
  font-weight: 500;
`;

// ---------- Plus Button ----------
const MainButton = styled(ToolButton)`
  width: 65px;
  height: 65px;
  font-size: 1.8rem;
`;

const WhatsAppButton = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [openBooking, setOpenBooking] = useState(false);

  const whatsappNumber = "+255616543216";
  const defaultMessage = encodeURIComponent("Hi, I'm interested in your tours and safaris!");

  return (
    <>
      {/* Floating Menu */}
      <Container>
        {/* Tools appear when + expands */}
        <AnimatePresence>
          {openMenu && (
            <>
              {/* Booking Tool */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 50 }}
                style={{ display: "flex", alignItems: "center" }}
              >
                <Label
                  initial={{ opacity: 0, scale: 0.7 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.7 }}
                >
                  Book Here
                </Label>

                <ToolButton
                  whileHover={{ scale: 1.15 }}
                  whileTap={{ scale: 0.92 }}
                  onClick={() => setOpenBooking(true)}
                >
                  <FiMail />
                </ToolButton>
              </motion.div>

              {/* WhatsApp Tool */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 50 }}
                style={{ display: "flex", alignItems: "center" }}
              >
                <Label
                  initial={{ opacity: 0, scale: 0.7 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.7 }}
                >
                  WhatsApp
                </Label>

                <ToolButton
                  as="a"
                  href={`https://wa.me/${whatsappNumber}?text=${defaultMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.15 }}
                  whileTap={{ scale: 0.92 }}
                >
                  <FiMessageCircle />
                </ToolButton>
              </motion.div>
            </>
          )}
        </AnimatePresence>

        {/* Main Plus Button */}
        <MainButton
          onClick={() => setOpenMenu(!openMenu)}
          animate={{ rotate: openMenu ? 45 : 0 }}
          transition={{ type: "spring", stiffness: 250, damping: 18 }}
        >
          <FiPlus />
        </MainButton>
      </Container>

      {/* Booking Form Modal */}
      <BookingFormModal open={openBooking} onClose={() => setOpenBooking(false)} />
    </>
  );
};



export default WhatsAppButton;