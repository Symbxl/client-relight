import ArrowLeftIcon from '@untitled-ui/icons-react/build/esm/ArrowLeft';
import {
  Box,
  Container,
  Link,
  Stack,
  SvgIcon,
  Typography,
  Unstable_Grid2 as Grid
} from '@mui/material';
import { RouterLink } from 'src/components/router-link';
import { Seo } from 'src/components/seo';
import { usePageView } from 'src/hooks/use-page-view';
import { paths } from 'src/paths';
import { CourseSummary } from 'src/sections/dashboard/academy/course-summary';
import { CourseChapter } from 'src/sections/dashboard/academy/course-chapter';
import type { Course } from 'src/types/academy';
import type { Page as PageType } from 'src/types/page';

const useCourse = (): Course => {
  return {
    id: 'Equipment',
    chapters: [
      {
        title: 'Safety',
        description: 'How to wear proper equipment',
        lesson: ''
      },
      {
        title: 'Store & Track Equipment',
        description: 'How to wear proper equipment',
        lesson: ''
      },
      {
        title: 'Safety',
        description: 'How to wear proper equipment',
        lesson: ''
      },
    ],
    description: 'Introductory course for design and framework basics',
    duration: '78 hours',
    progress: 100,
    title: 'React and Redux Tutorial'
  };
};

const Page: PageType = () => {
  const course = useCourse();

  usePageView();

  const activeChapter = 1;
  const chapter = course.chapters![activeChapter];

  return (
    <>
      <Seo title="Dashboard: Academy Course" />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 3
        }}
      >
        <Container maxWidth="xl">
          <Grid
            container
            spacing={4}
          >
            <Grid
              xs={12}
              md={4}
            >
              <Stack spacing={3}>
                <div>
                  <Link
                    color="text.primary"
                    component={RouterLink}
                    href={paths.dashboard.academy.index}
                    sx={{
                      alignItems: 'center',
                      display: 'inline-flex'
                    }}
                    underline="hover"
                  >
                    <SvgIcon sx={{ mr: 1 }}>
                      <ArrowLeftIcon />
                    </SvgIcon>
                    <Typography variant="subtitle2">
                      Training
                    </Typography>
                  </Link>
                </div>
                <CourseSummary
                  activeChapter={activeChapter}
                  course={course}
                />
              </Stack>
            </Grid>
            <Grid
              xs={12}
              md={8}
            >
              {chapter && <CourseChapter chapter={chapter} />}
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default Page;

