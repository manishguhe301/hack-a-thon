import searchicon from '../../assets/icons/search.svg';
import arrow from '../../assets/icons/arrow.svg';
import { useEffect, useMemo, useState } from 'react';
import ChallengeCard from '../ChallengeCard/ChallengeCard';
import data from '../../utils/data.json';
import {
  ArrowIcon,
  ArrowIconWrapper,
  ChallengeCardWrapper,
  ChallengesSection,
  DropdownWrapper,
  ExploreChallengesContainer,
  FilterCheckbox,
  FilterLabel,
  FilterSection,
  FilterSectionTitle,
  FiltersNames,
  FiltersWrapper,
  FilterTag,
  FilterTitle,
  InputFilterWrapper,
  SearchIcon,
  SearchIconWrapper,
  SearchInput,
  SearchInputWrapper,
  SectionHeading,
} from './exploreChallengesStyles';
import { levels, status } from '../../utils/data';
import { CancelOutlined } from '@mui/icons-material';

const ExploreChallenges = () => {
  const [statusFilters, setStatusFilters] = useState([]);
  const [levelsFilters, setLevelsFilters] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [showFilters, setShowFilters] = useState(false);

  useEffect(() => {
    const currentDate = Date.now();
    data.forEach((item) => {
      const start = new Date(item.startDate).getTime();
      const end = new Date(item.endDate).getTime();
      item.status =
        start < currentDate && end < currentDate
          ? 'Past'
          : start <= currentDate && end > currentDate
          ? 'Active'
          : 'Upcoming';
    });
  }, []);

  const filteredData = useMemo(() => {
    let filtered = data;

    if (statusFilters.length && !statusFilters.includes('All')) {
      filtered = filtered.filter((item) =>
        statusFilters.some(
          (status) => item.status.toLowerCase() === status.toLowerCase()
        )
      );
    }

    if (levelsFilters.length) {
      filtered = filtered.filter((item) => levelsFilters.includes(item.level));
    }

    if (searchTerm) {
      filtered = filtered.filter((item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    return filtered;
  }, [statusFilters, levelsFilters, searchTerm]);

  const handleStatusFilters = (e) => {
    const { value, checked } = e.target;
    setStatusFilters((prev) =>
      checked ? [...prev, value] : prev.filter((item) => item !== value)
    );
  };

  const handleLevelsFilters = (e) => {
    const { value, checked } = e.target;
    setLevelsFilters((prev) =>
      checked ? [...prev, value] : prev.filter((item) => item !== value)
    );
  };

  const handleStatusFilterRemove = (item) => {
    setStatusFilters((prev) => prev.filter((status) => status !== item));
    document.getElementById(item).checked = false;
  };

  const handleLevelsFilterRemove = (item) => {
    setLevelsFilters((prev) => prev.filter((level) => level !== item));
    document.getElementById(item).checked = false;
  };

  return (
    <ChallengesSection>
      <ExploreChallengesContainer>
        <SectionHeading>Explore Challenges</SectionHeading>
        <InputFilterWrapper>
          <SearchInputWrapper>
            <SearchInput
              type='search'
              placeholder='Search'
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <SearchIconWrapper>
              <SearchIcon src={searchicon} alt='search-icon' />
            </SearchIconWrapper>
          </SearchInputWrapper>
          <DropdownWrapper>
            <FilterTitle onClick={() => setShowFilters(!showFilters)}>
              Filter
              <ArrowIconWrapper>
                <ArrowIcon src={arrow} alt='arrow' rotate={showFilters} />
              </ArrowIconWrapper>
            </FilterTitle>
            <FiltersWrapper show={showFilters}>
              <FilterSection>
                <FilterSectionTitle>Status</FilterSectionTitle>
                {status.map((item) => (
                  <span key={item}>
                    <FilterCheckbox
                      onChange={handleStatusFilters}
                      type='checkbox'
                      id={item}
                      value={item}
                    />
                    <FilterLabel htmlFor={item}>{item}</FilterLabel>
                  </span>
                ))}
              </FilterSection>
              <FilterSection>
                <FilterSectionTitle>Levels</FilterSectionTitle>
                {levels.map((item) => (
                  <span key={item}>
                    <FilterCheckbox
                      onChange={handleLevelsFilters}
                      type='checkbox'
                      id={item}
                      value={item}
                    />
                    <FilterLabel htmlFor={item}>{item}</FilterLabel>
                  </span>
                ))}
              </FilterSection>
            </FiltersWrapper>
          </DropdownWrapper>
        </InputFilterWrapper>
        <FiltersNames>
          {statusFilters.map((item) => (
            <FilterTag key={item}>
              {item}{' '}
              <CancelOutlined
                sx={{ fontSize: '20px' }}
                onClick={() => handleStatusFilterRemove(item)}
              />
            </FilterTag>
          ))}
          {levelsFilters.map((item) => (
            <FilterTag key={item}>
              {item}{' '}
              <CancelOutlined
                sx={{ fontSize: '20px' }}
                onClick={() => handleLevelsFilterRemove(item)}
              />
            </FilterTag>
          ))}
        </FiltersNames>
      </ExploreChallengesContainer>
      <ChallengeCardWrapper>
        {(filteredData.length === 0 && (
          <h1 style={{ color: '#fff' }}>No Challenges Found</h1>
        )) ||
          filteredData.map((item) => (
            <ChallengeCard key={item.id} id={item.id} data={item} />
          ))}
      </ChallengeCardWrapper>
    </ChallengesSection>
  );
};

export default ExploreChallenges;
