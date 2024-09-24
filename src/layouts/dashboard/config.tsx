import type { ReactNode } from 'react';
import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { Chip, SvgIcon } from '@mui/material';
import AlignLeft02Icon from 'src/icons/untitled-ui/duocolor/align-left-02';
import BarChartSquare02Icon from 'src/icons/untitled-ui/duocolor/bar-chart-square-02';
import Building04Icon from 'src/icons/untitled-ui/duocolor/building-04';
import CalendarIcon from 'src/icons/untitled-ui/duocolor/calendar';
import CheckDone01Icon from 'src/icons/untitled-ui/duocolor/check-done-01';
import CreditCard01Icon from 'src/icons/untitled-ui/duocolor/credit-card-01';
import CurrencyBitcoinCircleIcon from 'src/icons/untitled-ui/duocolor/currency-bitcoin-circle';
import File01Icon from 'src/icons/untitled-ui/duocolor/file-01';
import GraduationHat01Icon from 'src/icons/untitled-ui/duocolor/graduation-hat-01';
import HomeSmileIcon from 'src/icons/untitled-ui/duocolor/home-smile';
import LayoutAlt02Icon from 'src/icons/untitled-ui/duocolor/layout-alt-02';
import LineChartUp04Icon from 'src/icons/untitled-ui/duocolor/line-chart-up-04';
import Lock01Icon from 'src/icons/untitled-ui/duocolor/lock-01';
import LogOut01Icon from 'src/icons/untitled-ui/duocolor/log-out-01';
import Mail03Icon from 'src/icons/untitled-ui/duocolor/mail-03';
import Mail04Icon from 'src/icons/untitled-ui/duocolor/mail-04';
import MessageChatSquareIcon from 'src/icons/untitled-ui/duocolor/message-chat-square';
import ReceiptCheckIcon from 'src/icons/untitled-ui/duocolor/receipt-check';
import Share07Icon from 'src/icons/untitled-ui/duocolor/share-07';
import ShoppingBag03Icon from 'src/icons/untitled-ui/duocolor/shopping-bag-03';
import ShoppingCart01Icon from 'src/icons/untitled-ui/duocolor/shopping-cart-01';
import Truck01Icon from 'src/icons/untitled-ui/duocolor/truck-01';
import Upload04Icon from 'src/icons/untitled-ui/duocolor/upload-04';
import Users03Icon from 'src/icons/untitled-ui/duocolor/users-03';
import XSquareIcon from 'src/icons/untitled-ui/duocolor/x-square';
import { tokens } from 'src/locales/tokens';
import { paths } from 'src/paths';

export interface Item {
  disabled?: boolean;
  external?: boolean;
  icon?: ReactNode;
  items?: Item[];
  label?: ReactNode;
  path?: string;
  title: string;
}

export interface Section {
  items: Item[];
  subheader?: string;
}

export const useSections = () => {
  const { t } = useTranslation();

  return useMemo(
    () => {
      return [
        {
          items: [
            {
              title: t(tokens.nav.overview),
              path: paths.dashboard.index,
              icon: (
                <SvgIcon fontSize="small">
                  <HomeSmileIcon />
                </SvgIcon>
              )
            },
            {
              title: t(tokens.nav.crypto),
              path: paths.dashboard.crypto,
              icon: (
                <SvgIcon fontSize="small">
                  <CurrencyBitcoinCircleIcon />
                </SvgIcon>
              ),
            },
            {
              title: t(tokens.nav.academy),
              path: paths.dashboard.academy.index,
              icon: (
                <SvgIcon fontSize="small">
                  <GraduationHat01Icon />
                </SvgIcon>
              ),
              items: [
                {
                  title: t(tokens.nav.dashboard),
                  path: paths.dashboard.academy.index
                },
                {
                  title: t(tokens.nav.course),
                  path: paths.dashboard.academy.courseDetails
                }
              ]
            },
            {
              title: t(tokens.nav.account),
              path: paths.dashboard.account,
              icon: (
                <SvgIcon fontSize="small">
                  <HomeSmileIcon />
                </SvgIcon>
              )
            }
          ]
        },
        {
          subheader: t(tokens.nav.concepts),
          items: [
            {
              title: t(tokens.nav.customers),
              path: paths.dashboard.customers.index,
              icon: (
                <SvgIcon fontSize="small">
                  <Users03Icon />
                </SvgIcon>
              ),
              items: [
                {
                  title: t(tokens.nav.list),
                  path: paths.dashboard.customers.index
                },
                {
                  title: t(tokens.nav.details),
                  path: paths.dashboard.customers.details
                },
                {
                  title: t(tokens.nav.edit),
                  path: paths.dashboard.customers.edit
                }
              ]
            },
            {
              title: t(tokens.nav.productList),
              path: paths.dashboard.products.index,
              icon: (
                <SvgIcon fontSize="small">
                  <ShoppingBag03Icon />
                </SvgIcon>
              ),
              items: [
                {
                  title: t(tokens.nav.list),
                  path: paths.dashboard.products.index
                },
                {
                  title: t(tokens.nav.create),
                  path: paths.dashboard.products.create
                }
              ]
            },
            {
              title: t(tokens.nav.invoiceList),
              path: paths.dashboard.invoices.index,
              icon: (
                <SvgIcon fontSize="small">
                  <ReceiptCheckIcon />
                </SvgIcon>
              ),
              items: [
                {
                  title: t(tokens.nav.list),
                  path: paths.dashboard.invoices.index
                },
                {
                  title: t(tokens.nav.details),
                  path: paths.dashboard.invoices.details
                }
              ]
            },
            {
              title: t(tokens.nav.logistics),
              path: paths.dashboard.logistics.index,
              icon: (
                <SvgIcon fontSize="small">
                  <Truck01Icon />
                </SvgIcon>
              ),
              items: [
                {
                  title: t(tokens.nav.dashboard),
                  path: paths.dashboard.logistics.index
                },
                {
                  title: t(tokens.nav.fleet),
                  path: paths.dashboard.logistics.fleet
                }
              ]
            },

          ]
        },
        {
          subheader: t(tokens.nav.pages),
          items: [
            {
              title: t(tokens.nav.auth),
              icon: (
                <SvgIcon fontSize="small">
                  <Lock01Icon />
                </SvgIcon>
              ),
              items: [
                {
                  title: t(tokens.nav.login),
                  items: [
                    {
                      title: 'Classic',
                      path: paths.authDemo.login.classic
                    },
                    {
                      title: 'Modern',
                      path: paths.authDemo.login.modern
                    }
                  ]
                },
                {
                  title: t(tokens.nav.register),
                  items: [
                    {
                      title: 'Classic',
                      path: paths.authDemo.register.classic
                    },
                    {
                      title: 'Modern',
                      path: paths.authDemo.register.modern
                    }
                  ]
                },
                {
                  title: t(tokens.nav.forgotPassword),
                  items: [
                    {
                      title: 'Classic',
                      path: paths.authDemo.forgotPassword.classic
                    },
                    {
                      title: 'Modern',
                      path: paths.authDemo.forgotPassword.modern
                    }
                  ]
                },
                {
                  title: t(tokens.nav.resetPassword),
                  items: [
                    {
                      title: 'Classic',
                      path: paths.authDemo.resetPassword.classic
                    },
                    {
                      title: 'Modern',
                      path: paths.authDemo.resetPassword.modern
                    }
                  ]
                },
                {
                  title: t(tokens.nav.verifyCode),
                  items: [
                    {
                      title: 'Classic',
                      path: paths.authDemo.verifyCode.classic
                    },
                    {
                      title: 'Modern',
                      path: paths.authDemo.verifyCode.modern
                    }
                  ]
                }
              ]
            },
            {
              title: t(tokens.nav.checkout),
              path: paths.checkout,
              icon: (
                <SvgIcon fontSize="small">
                  <LogOut01Icon />
                </SvgIcon>
              )
            },
            {
              title: t(tokens.nav.contact),
              path: paths.contact,
              icon: (
                <SvgIcon fontSize="small">
                  <Mail04Icon />
                </SvgIcon>
              )
            },
            {
              title: t(tokens.nav.error),
              icon: (
                <SvgIcon fontSize="small">
                  <XSquareIcon />
                </SvgIcon>
              ),
              items: [
                {
                  title: '401',
                  path: paths['401']
                },
                {
                  title: '404',
                  path: paths['404']
                },
                {
                  title: '500',
                  path: paths['500']
                }
              ]
            }
          ]
        },
      ];
    },
    [t]
  );
};
