'use client';
import React, { useEffect } from 'react';
import PageHeadingTitle from '../PageHeadingTitle';
import MissionVisionValues from './MissionVisionValues';
import { useDispatch, useSelector } from 'react-redux';
import { fetchLandingPageChooseUsData } from '@/store/features/whyToChooseus/whyToChooseUsSlice';
import { Loader } from '@/utils/lazyImport';
import GlobalStateHandler from '../GlobalStateHandler/GlobalStateHandler';
export default function Choose() {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.chooseUs || {});
  const chooseData = data?.data || {};
  const { name, description, mission, value, vision } = chooseData;

  useEffect(() => {
    dispatch(fetchLandingPageChooseUsData());
  }, [dispatch]);

  const isEmpty = !name && !description && !mission && !value && !vision;
  return (
    <>
      <GlobalStateHandler
        loading={loading}
        empty={isEmpty}
        loaderComponent={Loader}
      />
      <div className="padding">
        <PageHeadingTitle
          heading={name}
          subheading={description}
          className="chose-us-width"
        />
        <MissionVisionValues mission={mission} value={value} vision={vision} />
      </div>
    </>
  );
}
