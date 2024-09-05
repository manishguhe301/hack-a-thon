import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import calender from '../../assets/icons/uil_calender.svg';
import cloud from '../../assets/icons/bxs_cloud-upload.svg';
import banner1 from '../../assets/cardimage/b1.png';
import banner2 from '../../assets/cardimage/b2.png';
import banner3 from '../../assets/cardimage/b3.png';
import banner4 from '../../assets/cardimage/b4.png';
import banner5 from '../../assets/cardimage/b5.png';
import banner6 from '../../assets/cardimage/b6.png';
import data from '../../utils/data.json';
import {
  Banner,
  Button,
  CalendarIcon,
  CalendariconWrapper,
  CreateChallengeContainer,
  DateField,
  Description,
  Field,
  FileField,
  Form,
  IconWrapper,
  InputLabelWrapper,
  Label,
  Message,
  Option,
  PreviousBannerWrapper,
  Select,
  Title,
  TitleWrapper,
  UploadImage,
  UpLoadLabel,
} from './createChallengeStyles';

const images = [banner1, banner2, banner3, banner4, banner5, banner6];

const CreateChallengeForm = () => {
  const { id } = useParams();
  const [challenge, setChallenge] = useState({
    name: '',
    status: '',
    level: '',
    startDate: '',
    endDate: '',
    description: '',
    image: '',
  });

  useEffect(() => {
    if (id) {
      const item = data[id];
      item.startDate = new Date(item.startDate).toISOString().slice(0, 19);
      item.endDate = new Date(item.endDate).toISOString().slice(0, 19);
      setChallenge(item);
    }
  }, [id]);

  const [message, setMessage] = useState('');

  const handleChallengeFields = (e) => {
    const { name, value } = e.target;
    setChallenge((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const submitChallenge = (e) => {
    e.preventDefault();
    const { name, level, startDate, endDate, description } = challenge;
    if (name && level && startDate && endDate && description) {
      setMessage('Successfully Created Challenge');
      data.push(challenge);
    } else {
      setMessage('Please Fill All Fields');
    }
  };

  return (
    <CreateChallengeContainer>
      <TitleWrapper>
        <Title>Challenge Details</Title>
      </TitleWrapper>
      {message && <Message>{message}</Message>}
      <Form>
        <InputLabelWrapper>
          <Label htmlFor='challenge__name'>Challenge Name</Label>
          <Field
            type='text'
            id='challenge__name'
            name='name'
            value={challenge.name}
            onChange={handleChallengeFields}
          />
        </InputLabelWrapper>

        <InputLabelWrapper>
          <Label htmlFor='challenge__start__date'>Start Date</Label>
          <IconWrapper>
            <DateField
              type='datetime-local'
              id='challenge__start__date'
              name='startDate'
              value={challenge.startDate}
              onChange={handleChallengeFields}
            />
            <CalendariconWrapper>
              <CalendarIcon src={calender} alt='calendar-icon' />
            </CalendariconWrapper>
          </IconWrapper>
        </InputLabelWrapper>

        <InputLabelWrapper>
          <Label htmlFor='challenge__end__date'>End Date</Label>
          <IconWrapper>
            <DateField
              type='datetime-local'
              id='challenge__end__date'
              name='endDate'
              value={challenge.endDate}
              onChange={handleChallengeFields}
            />
            <CalendariconWrapper>
              <CalendarIcon src={calender} alt='calendar-icon' />
            </CalendariconWrapper>
          </IconWrapper>
        </InputLabelWrapper>

        <InputLabelWrapper>
          <Label htmlFor='challenge__desc'>Description</Label>
          <Description
            rows={8}
            id='challenge__desc'
            name='description'
            value={challenge.description}
            onChange={handleChallengeFields}
          />
        </InputLabelWrapper>

        <InputLabelWrapper>
          <Label htmlFor='image__upload'>Image</Label>
          <span>
            <FileField type='file' id='image__upload' />
            <UpLoadLabel htmlFor='image__upload'>
              Upload <UploadImage src={cloud} alt='cloud' />
            </UpLoadLabel>
          </span>

          {(challenge.image || id) && (
            <PreviousBannerWrapper>
              <Banner
                src={images[challenge.image - 1]}
                alt='challenge-banner'
              />
            </PreviousBannerWrapper>
          )}
        </InputLabelWrapper>

        <InputLabelWrapper>
          <Label htmlFor='challenge__level'>Level Type</Label>
          <Select
            id='challenge__level'
            name='level'
            value={challenge.level}
            onChange={handleChallengeFields}
          >
            <Option value=''>Select Level</Option>
            <Option value='Easy'>Easy</Option>
            <Option value='Medium'>Medium</Option>
            <Option value='Hard'>Hard</Option>
          </Select>
        </InputLabelWrapper>

        <Button onClick={submitChallenge}>
          {id ? 'Update Challenge' : 'Create Challenge'}
        </Button>
      </Form>
    </CreateChallengeContainer>
  );
};

export default CreateChallengeForm;
