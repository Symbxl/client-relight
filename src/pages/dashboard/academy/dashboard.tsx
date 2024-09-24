import ArrowRightIcon from '@untitled-ui/icons-react/build/esm/ArrowRight';
import {
  Box,
  Button,
  Container,
  Stack,
  SvgIcon,
  Typography,
  Unstable_Grid2 as Grid
} from '@mui/material';
import { Seo } from 'src/components/seo';
import { usePageView } from 'src/hooks/use-page-view';
import { useSettings } from 'src/hooks/use-settings';
import { AcademyDailyProgress } from 'src/sections/dashboard/academy/academy-daily-progress';
import { AcademyFind } from 'src/sections/dashboard/academy/academy-find';
import { CourseCard } from 'src/sections/dashboard/academy/course-card';
import { CourseSearch } from 'src/sections/dashboard/academy/course-search';
import type { Course } from 'src/types/academy';
import type { Page as PageType } from 'src/types/page';

const useCourses = (): Course[] => {
  return [
    {
      id: 'c3a2b7331eef8329e2a87c79',
      description: 'Video #1',
      duration: '1 hour',
      media: '#',
      progress: 100,
      title: 'Relight Basic Training'
    },
    {
      id: 'c3a2b7331eef8329e2a87c79',
      description: 'Video #2',
      duration: '1 hour',
      media: '#',
      progress: 100,
      title: 'How to properly use & store equipment',
    },

  ];
};

const Page: PageType = () => {
  const settings = useSettings();
  const courses = useCourses();

  usePageView();

  return (
    <>
      <Seo title="Dashboard: Academy Dashboard" />
      <Box
        component="main"
        sx={{ flexGrow: 1 }}
      >
        <Box sx={{ py: '64px' }}>
          <Container maxWidth={settings.stretch ? false : 'xl'}>
            <Grid
              container
              spacing={{
                xs: 3,
                lg: 4
              }}
            >
              <Grid xs={12}>
                <Typography variant="h6">
                  Training
                </Typography>
                <Typography
                  color="text.secondary"
                  sx={{ mt: 1 }}
                  variant="body2"
                >
                  Please complete the training video below
                </Typography>
              </Grid>
              <Grid xs={12}>
              </Grid>
              {courses.map((course) => (
                <Grid
                  key={course.id}
                  xs={12}
                  md={4}
                >
                  <CourseCard course={course} />
                </Grid>
              ))}
            </Grid>
          </Container>
        </Box>
      </Box>
    </>
  );
};

export default Page;
