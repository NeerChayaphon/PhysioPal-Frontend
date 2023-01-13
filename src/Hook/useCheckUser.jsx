import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../slice/user/userSlice';

function useCheckUser(role) {
  const user = useSelector((state) => state.user.data);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      const token = sessionStorage.getItem('token');
      if (!token) {
        navigate('/patient/login');
      }

      if (user === null) {
        try {
          const response = await fetch(
            'http://localhost:8080/user/GetUserByJWT',
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
          } else {
            navigate('/patient/login');
          }
        } catch (error) {
          navigate('/patient/login');
        }
      }

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
