import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Link } from 'react-router-dom';
import { all_routes } from '../../../Router/all_routes';
import ImageWithBasePath from '../../../core/img/imagewithbasebath';
import { Button, Steps, Form, Input, Checkbox, Select, Divider, notification } from 'antd';
import { ArrowLeftOutlined, ArrowRightOutlined } from '@ant-design/icons';

// Step 1: Tenant & Business Entity Information
const TenantBusinessInfo = ({ control, errors, setValue, watch }) => {
  return (
    <div className="step-content">
      <div className="form-section">
        <h3>Tenant Information</h3>
        <Form.Item
          label="Organization Name"
          validateStatus={errors?.tenant?.name ? 'error' : ''}
          help={errors?.tenant?.name?.message}
        >
          <Input
            placeholder="e.g. City Pharmacy Ltd"
            {...control.register('tenant.name')}
          />
        </Form.Item>

        <Form.Item
          label="Organization Slug (URL identifier)"
          validateStatus={errors?.tenant?.slug ? 'error' : ''}
          help={errors?.tenant?.slug?.message}
        >
          <Input
            placeholder="e.g. city-pharmacy"
            {...control.register('tenant.slug')}
          />
        </Form.Item>

        <Form.Item
          label="Legal Name (if different)"
          validateStatus={errors?.tenant?.legalName ? 'error' : ''}
          help={errors?.tenant?.legalName?.message}
        >
          <Input
            placeholder="e.g. City Pharmacy Nigeria Limited"
            {...control.register('tenant.legalName')}
          />
        </Form.Item>

        <Form.Item
          label="Contact Email"
          validateStatus={errors?.tenant?.contactEmail ? 'error' : ''}
          help={errors?.tenant?.contactEmail?.message}
        >
          <Input
            type="email"
            placeholder="e.g. info@citypharmacy.com"
            {...control.register('tenant.contactEmail')}
          />
        </Form.Item>
      </div>

      <Divider />

      <div className="form-section">
        <h3>Business Entity Information</h3>
        <Form.Item
          label="Business Name"
          validateStatus={errors?.businessEntity?.name ? 'error' : ''}
          help={errors?.businessEntity?.name?.message}
        >
          <Input
            placeholder="e.g. City Pharmacy Main Branch"
            {...control.register('businessEntity.name')}
          />
        </Form.Item>

        <Form.Item
          label="Tax Identification Number (TIN)"
          validateStatus={errors?.businessEntity?.taxId ? 'error' : ''}
          help={errors?.businessEntity?.taxId?.message}
        >
          <Input
            placeholder="e.g. 123456789-0001"
            {...control.register('businessEntity.taxId')}
          />
        </Form.Item>

        <Form.Item
          label="Legal Address"
          validateStatus={errors?.businessEntity?.legalAddress ? 'error' : ''}
          help={errors?.businessEntity?.legalAddress?.message}
        >
          <Input.TextArea
            rows={3}
            placeholder="Full business address including state"
            {...control.register('businessEntity.legalAddress')}
          />
        </Form.Item>
      </div>
    </div>
  );
};

// Step 2: Store Information
const StoreInfo = ({ control, errors, setValue, watch }) => {
  return (
    <div className="step-content">
      <div className="form-section">
        <h3>Primary Store Information</h3>
        <Form.Item
          label="Store Name"
          validateStatus={errors?.store?.name ? 'error' : ''}
          help={errors?.store?.name?.message}
        >
          <Input
            placeholder="e.g. City Pharmacy Main Branch"
            {...control.register('store.name')}
          />
        </Form.Item>

        <Form.Item
          label="Store Code"
          validateStatus={errors?.store?.code ? 'error' : ''}
          help={errors?.store?.code?.message}
        >
          <Input
            placeholder="e.g. CP-MAIN-001"
            {...control.register('store.code')}
          />
        </Form.Item>

        <Form.Item
          label="Store Address"
          validateStatus={errors?.store?.address ? 'error' : ''}
          help={errors?.store?.address?.message}
        >
          <Input.TextArea
            rows={3}
            placeholder="Physical store location address"
            {...control.register('store.address')}
          />
        </Form.Item>

        <Form.Item
          label="Store Type"
          validateStatus={errors?.store?.type ? 'error' : ''}
          help={errors?.store?.type?.message}
        >
          <Select
            placeholder="Select store type"
            {...control.register('store.type')}
          >
            <Select.Option value="retail">Retail Pharmacy</Select.Option>
            <Select.Option value="wholesale">Wholesale Pharmacy</Select.Option>
            <Select.Option value="hospital">Hospital Pharmacy</Select.Option>
            <Select.Option value="clinic">Clinic Pharmacy</Select.Option>
          </Select>
        </Form.Item>

        <Form.Item>
          <Checkbox
            {...control.register('store.isMain')}
            defaultChecked={true}
          >
            This is the main store
          </Checkbox>
        </Form.Item>
      </div>
    </div>
  );
};

// Step 3: Warehouse Information
const WarehouseInfo = ({ control, errors, setValue, watch }) => {
  return (
    <div className="step-content">
      <div className="form-section">
        <h3>Warehouse Information</h3>
        <Form.Item
          label="Warehouse Name"
          validateStatus={errors?.warehouse?.name ? 'error' : ''}
          help={errors?.warehouse?.name?.message}
        >
          <Input
            placeholder="e.g. Main Warehouse"
            {...control.register('warehouse.name')}
          />
        </Form.Item>

        <Form.Item
          label="Warehouse Code"
          validateStatus={errors?.warehouse?.code ? 'error' : ''}
          help={errors?.warehouse?.code?.message}
        >
          <Input
            placeholder="e.g. WH-MAIN-001"
            {...control.register('warehouse.code')}
          />
        </Form.Item>

        <Form.Item
          label="Warehouse Address"
          validateStatus={errors?.warehouse?.address ? 'error' : ''}
          help={errors?.warehouse?.address?.message}
        >
          <Input.TextArea
            rows={3}
            placeholder="Physical warehouse location address"
            {...control.register('warehouse.address')}
          />
        </Form.Item>
      </div>
    </div>
  );
};

// Step 4: Admin User Information
const AdminUserInfo = ({ control, errors, setValue, watch }) => {
  return (
    <div className="step-content">
      <div className="form-section">
        <h3>Administrator Account</h3>
        <Form.Item
          label="Full Name"
          validateStatus={errors?.adminUser?.name ? 'error' : ''}
          help={errors?.adminUser?.name?.message}
        >
          <Input
            placeholder="e.g. John Doe"
            {...control.register('adminUser.name')}
          />
        </Form.Item>

        <Form.Item
          label="Email Address"
          validateStatus={errors?.adminUser?.email ? 'error' : ''}
          help={errors?.adminUser?.email?.message}
        >
          <Input
            type="email"
            placeholder="e.g. john.doe@citypharmacy.com"
            {...control.register('adminUser.email')}
          />
        </Form.Item>

        <Form.Item
          label="Password"
          validateStatus={errors?.adminUser?.password ? 'error' : ''}
          help={errors?.adminUser?.password?.message}
        >
          <Input.Password
            placeholder="At least 6 characters"
            {...control.register('adminUser.password')}
          />
        </Form.Item>

        <Form.Item
          label="Confirm Password"
          validateStatus={errors?.confirmPassword ? 'error' : ''}
          help={errors?.confirmPassword?.message}
        >
          <Input.Password
            placeholder="Confirm your password"
            {...control.register('confirmPassword')}
          />
        </Form.Item>

        <Form.Item
          label="Phone Number"
          validateStatus={errors?.adminUser?.phone ? 'error' : ''}
          help={errors?.adminUser?.phone?.message}
        >
          <Input
            placeholder="e.g. 08012345678"
            {...control.register('adminUser.phone')}
          />
        </Form.Item>
      </div>

      <Divider />

      <div className="form-section">
        <h3>Terms & Conditions</h3>
        <Form.Item
          validateStatus={errors?.termsAccepted ? 'error' : ''}
          help={errors?.termsAccepted?.message}
        >
          <Checkbox
            {...control.register('termsAccepted')}
          >
            I agree to the <Link to="#">Terms & Privacy</Link>
          </Checkbox>
        </Form.Item>
      </div>
    </div>
  );
};

// Main Onboarding Form Component
const TenantOnboardingForm = () => {
  const route = all_routes;
  const [currentStep, setCurrentStep] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // Define form schema based on backend validation
  const formSchema = z.object({
    tenant: z.object({
      name: z.string().min(2, "Organization name is required"),
      slug: z.string()
        .min(2)
        .max(50)
        .regex(/^[a-z0-9-]+$/, {
          message: "Slug can only contain lowercase letters, numbers and hyphens"
        }),
      legalName: z.string().optional(),
      contactEmail: z.string().email().optional(),
    }),
    businessEntity: z.object({
      name: z.string().min(2, "Business name is required"),
      taxId: z.string().optional(),
      legalAddress: z.string().optional(),
    }),
    store: z.object({
      name: z.string().min(2, "Store name is required"),
      code: z.string().min(2, "Store code is required"),
      address: z.string().optional(),
      isMain: z.boolean().optional().default(true),
      type: z.enum(['retail', 'wholesale', 'hospital', 'clinic']).optional(),
    }),
    warehouse: z.object({
      code: z.string().min(2, "Warehouse code is required"),
      name: z.string().min(2, "Warehouse name is required"),
      address: z.string().optional(),
    }),
    adminUser: z.object({
      name: z.string().min(2, "Full name is required"),
      email: z.string().email("Valid email is required"),
      password: z.string().min(6, "Password must be at least 6 characters"),
      phone: z.string().optional(),
    }),
    confirmPassword: z.string(),
    termsAccepted: z.literal(true, {
      errorMap: () => ({ message: "You must accept the terms and conditions" }),
    }),
  }).refine((data) => data.adminUser.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });

  const { control, handleSubmit, formState: { errors }, watch, setValue } = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      tenant: {
        name: '',
        slug: '',
        legalName: '',
        contactEmail: '',
      },
      businessEntity: {
        name: '',
        taxId: '',
        legalAddress: '',
      },
      store: {
        name: '',
        code: '',
        address: '',
        isMain: true,
        type: 'retail',
      },
      warehouse: {
        code: '',
        name: '',
        address: '',
      },
      adminUser: {
        name: '',
        email: '',
        password: '',
        phone: '',
      },
      confirmPassword: '',
      termsAccepted: false,
    }
  });

  const steps = [
    {
      title: 'Organization',
      content: <TenantBusinessInfo control={control} errors={errors} setValue={setValue} watch={watch} />,
    },
    {
      title: 'Store',
      content: <StoreInfo control={control} errors={errors} setValue={setValue} watch={watch} />,
    },
    {
      title: 'Warehouse',
      content: <WarehouseInfo control={control} setValue={setValue} errors={errors} watch={watch} />,
    },
    {
      title: 'Admin Account',
      content: <AdminUserInfo control={control} errors={errors} setValue={setValue} watch={watch} />,
    },
  ];

  const next = () => {
    setCurrentStep(currentStep + 1);
  };

  const prev = () => {
    setCurrentStep(currentStep - 1);
  };

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    try {
      // Prepare the payload according to TenantOnboardingDto
      const payload = {
        tenant: {
          name: data.tenant.name,
          slug: data.tenant.slug,
          legalName: data.tenant.legalName || undefined,
          contactEmail: data.tenant.contactEmail || undefined,
        },
        businessEntity: {
          name: data.businessEntity.name,
          taxId: data.businessEntity.taxId || undefined,
          legalAddress: data.businessEntity.legalAddress || undefined,
        },
        store: {
          name: data.store.name,
          code: data.store.code,
          address: data.store.address || undefined,
          isMain: data.store.isMain,
          type: data.store.type,
        },
        warehouse: {
          name: data.warehouse.name,
          code: data.warehouse.code,
          address: data.warehouse.address || undefined,
        },
        adminUser: {
          name: data.adminUser.name,
          email: data.adminUser.email,
          password: data.adminUser.password,
          phone: data.adminUser.phone || undefined,
        }
      };

      // Call the API endpoint
      const response = await fetch('/api/tenants/onboard', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error('Failed to create tenant');
      }

      const result = await response.json();
      notification.success({
        message: 'Tenant Created Successfully',
        description: 'Your organization has been successfully onboarded. You can now log in.',
      });

      // Redirect to login or dashboard
      window.location.href = route.signin;

    } catch (error) {
      notification.error({
        message: 'Onboarding Failed',
        description: error.message || 'An error occurred during tenant creation',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="main-wrapper">
      <div className="account-content">
        <div className="login-wrapper login-new">
          <div className="login-content user-login">
            <div className="login-logo">
              <ImageWithBasePath src="assets/img/logo.png" alt="img" />
              <Link to={route.dashboard} className="login-logo logo-white">
                <ImageWithBasePath src="assets/img/logo-white.png" alt />
              </Link>
            </div>

            <div className="onboarding-container">
              <Steps current={currentStep} className="onboarding-steps">
                {steps.map((step) => (
                  <Steps.Step key={step.title} title={step.title} />
                ))}
              </Steps>

              <Form onFinish={handleSubmit(onSubmit)} className="onboarding-form">
                <div className="steps-content">{steps[currentStep].content}</div>

                <div className="steps-action">
                  {currentStep > 0 && (
                    <Button
                      type="default"
                      onClick={prev}
                      icon={<ArrowLeftOutlined />}
                      disabled={isSubmitting}
                    >
                      Previous
                    </Button>
                  )}

                  {currentStep < steps.length - 1 && (
                    <Button
                      type="primary"
                      onClick={next}
                      icon={<ArrowRightOutlined />}
                      style={{ marginLeft: 8 }}
                    >
                      Next
                    </Button>
                  )}

                  {currentStep === steps.length - 1 && (
                    <Button
                      type="primary"
                      htmlType="submit"
                      loading={isSubmitting}
                      style={{ marginLeft: 8 }}
                    >
                      Complete Onboarding
                    </Button>
                  )}
                </div>
              </Form>
            </div>

            <div className="signinform">
              <h4>
                Already have an account?{' '}
                <Link to={route.signinthree} className="hover-a">
                  Sign In Instead
                </Link>
              </h4>
            </div>

            <div className="my-4 d-flex justify-content-center align-items-center copyright-text">
              <p>Copyright © 2025 Octa Pharma Network. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default TenantOnboardingForm;