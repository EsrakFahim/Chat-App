import styled from '@emotion/styled';
import { Avatar, Badge } from '@mui/material';
import React from 'react';

const BadgeAvatar = ({ img }) => {

      const AvatarBadge = styled(Badge)(({ theme }) => ({
            "& .MuiBadge-badge": {
                  background: '#44b700',
                  color: '#44b700',
                  boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
                  "&::after": {
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        borderRadius: '50%',
                        animation: 'ripple 1.2s infinite ease-in-out',
                        border: '1px solid currentColor',
                        content: '""',
                  },
            },
            "@keyframes ripple": {
                  '0%': {
                        transform: 'scale(0.8)',
                        opacity: 1,
                  },
                  '100%': {
                        transform: 'scale(2.4)',
                        opacity: 0,
                  },
            }
      }))

      return (
            <AvatarBadge variant="dot" overlap="circular" badgeContent=" " anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'right',
            }}>
                  <Avatar src={img} />
            </AvatarBadge>
      );
};

export default BadgeAvatar;