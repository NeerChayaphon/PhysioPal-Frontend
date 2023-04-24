import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../slice/user/userSlice';

function useCheckUser(role, navigateTo) {
  const user = useSelector((state) => state.user.data);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      const token = sessionStorage.getItem('token');
      console.log(token);
      if (!token) {
        navigate(navigateTo);
      } else {
        if (user === null) {
          try {
            const response = await fetch(
              'https://physiopal-api-production.up.railway.app/user/GetUserByJWT',
              {
                method: 'GET',
                headers: {
                  'Content-Type': 'application/json',
                  Authorization: `${token}`,
                },
              }
            );
            const data = await response.json();
            if (response.ok) {
              dispatch(login(data));
              checkRole(role, data);
            } else {
              navigate(navigateTo);
            }
          } catch (error) {
            navigate(navigateTo);
          }
        } else {
          checkRole(role, user);
        }
      }
    };

    const checkRole = (role, user) => {
      if (role === 'patient' && user.role !== 'patient') {
        navigate('/patient/login');
      }

      if (role === 'physiotherapist' && user.role !== 'physiotherapist') {
        navigate('/patient/login');
      }
    };

    fetchUser();
  }, [dispatch, navigate, role, user]);
}

export default useCheckUser;
